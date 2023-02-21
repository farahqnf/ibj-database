const courseCategoryRepository = require("../repositories/courseCategoryRepository");

module.exports = {
    async list() {
        try {
            const data = await courseCategoryRepository.findAll();
            const dataCount = await courseCategoryRepository.getTotalPost();

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
            return courseCategoryRepository.create(data);
        } catch (error) {
            throw error;
        }
    },

    update(id, requestBody) {
        return courseCategoryRepository.update(id, requestBody);
    },

    delete(id) {
        return courseCategoryRepository.delete(id);
    },

    get(id) {
        return courseCategoryRepository.find(id);
    },
};
