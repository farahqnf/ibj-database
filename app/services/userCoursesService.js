const userCoursesRepository = require("../repositories/userCoursesRepository");

module.exports = {
    async list() {
        try {
            const data = await userCoursesRepository.findAll();
            const dataCount = await userCoursesRepository.getTotalPost();

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
            return userCoursesRepository.create(data);
        } catch (error) {
            throw error;
        }
    },

    update(id, requestBody) {
        return userCoursesRepository.update(id, requestBody);
    },

    delete(id) {
        return userCoursesRepository.delete(id);
    },

    get(id) {
        return userCoursesRepository.find(id);
    },
};
