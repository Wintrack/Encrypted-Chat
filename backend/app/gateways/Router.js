class Router {
	constructor(app) {
		this.app = app;
	}

	registerRoute(method, path, handler) {
		this.app[method](path, handler);
	}
}

module.exports = Router;