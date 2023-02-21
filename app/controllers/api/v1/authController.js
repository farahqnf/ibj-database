const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin } = require("../../../models");
const SALT = 10;

function encryptPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, SALT, (err, encryptedPassword) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(encryptedPassword);
        });
    });
}

function checkPassword(encryptedPassword, password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(isPasswordCorrect);
        });
    });
}

function createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "Rahasia");
}


module.exports = {
    async register(req, res) {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = await encryptPassword(req.body.password);

            let existingAdmin = await Admin.findOne({ where: { email: email } });

            if (existingAdmin) {
                res.status(409).json({
                    status: 'Error',
                    message: 'Email already exists'
                });
                return;
            }

            const admin = await Admin.create({
                name: name,
                email: email,
                password: password
            });

            res.status(201).json({
                status: 'Success',
                admin
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                message: 'Something went wrong - Ini register routes'
            });
        }
    },

    async login(req, res) {
        const email = req.body.email.toLowerCase(); // Biar case insensitive
        const password = req.body.password;

        const admin = await Admin.findOne({
            where: { email },
        });

        if (!admin) {
            res.status(404).json({ message: "Email tidak ditemukan" });
            return;
        }

        const isPasswordCorrect = await checkPassword(
            admin.password,
            password
        );

        if (!isPasswordCorrect) {
            res.status(401).json({ message: "Password salah!" });
            return;
        }

        const payload = {
            id: admin.id,
            name: admin.name,
            email: email,
            password: password
        }

        const token = createToken(payload);

        res.status(201).json({
            admin,
            token
        });
    },

    async whoAmI(req, res) {
        res.status(200).json(req.user);
    },

    async authorize(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = jwt.verify(
                token,
                process.env.JWT_SIGNATURE_KEY || "Rahasia"
            );

            req.user = await Admin.findByPk(tokenPayload.id);
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    },
};
