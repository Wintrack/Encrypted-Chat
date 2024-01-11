const User = require('../entities/User')

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const user = new User(userData.username, userData.password);
        return await this.userRepository.create(user);
    }
}

module.exports = CreateUser;