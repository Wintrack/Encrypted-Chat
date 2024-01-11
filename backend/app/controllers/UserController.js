class UserController {
	constructor(router, createUserUseCase) {
		this.createUserUseCase = createUserUseCase;
		router.registerRoute('post', '/users', this.createUser.bind(this));
	}

	async createUser(req, res) {
		try {
			const user = await this.createUserUseCase.execute(req.body);
			res.status(201).json(user);
		} catch (error) {
			res.status(400).json({
				error: error.message
			});
		}
	}
}

module.exports = UserController;