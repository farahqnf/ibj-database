const usersRepository = require("../repositories/usersRepository");

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

    create(data) {
        try {
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
