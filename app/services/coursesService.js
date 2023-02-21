const coursesRepository = require("../repositories/coursesRepository");

module.exports = {
    async list() {
        try {
            const data = await coursesRepository.findAll();
            const dataCount = await coursesRepository.getTotalPost();

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
            return coursesRepository.create(data);
        } catch (error) {
            throw error;
        }
    },

    update(id, requestBody) {
        return coursesRepository.update(id, requestBody);
    },

    delete(id) {
        return coursesRepository.delete(id);
    },

    get(id) {
        return coursesRepository.find(id);
    },
};
