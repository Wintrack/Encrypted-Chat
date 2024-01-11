const express = require('express');
const Database = require('./database');
const UserRepository = require('./repositories/UserRepository');
const CreateUser = require('./use_cases/CreateUser');
const UserController = require('./controllers/UserController');
const Router = require('./gateways/Router');
const config = require('./config');

const app = express();
app.use(express.json());

const database = new Database(config.mongoUrl);

database.connect().then(() => {
    const router = new Router(app);
    const userRepository = new UserRepository(database);
    const createUserUseCase = new CreateUser(userRepository);
    new UserController(router, createUserUseCase);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error('Database connection failed', error);
    process.exit(1);
});