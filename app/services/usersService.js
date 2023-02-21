const usersRepository = require("../repositories/usersRepository");
const { Users } = require("../models");

module.exports = {
    async list() {
        try {
            const data = await usersRepository.findAll();
            const dataCount = await usersRepository.getTotalPost();

            return {
                data: data,
                count: dataCount,
            };
        } catch (err) {
            throw err;
        }
    },

    create(data, res) {
        try {
            const email = data.email;
            let existingEmail = Users.findOne({ where: { email: email } });

            if (existingEmail) {
                res.status(409).json({
                    status: 'Error',
                    message: 'Email already exists'
                });
                return;
            }
            return usersRepository.create(data);

        } catch (error) {
            throw error;
        }
    },

    update(id, requestBody) {
        return usersRepository.update(id, requestBody);
    },

    delete(id) {
        return usersRepository.delete(id);
    },

    get(id) {
        return usersRepository.find(id);
    },
};
