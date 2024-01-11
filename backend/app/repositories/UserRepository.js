class UserRepository {
  constructor(database) {
    this.database = database;
  }

  async create(user) {
    try {
      const result = await this.database.collection('users').insertOne({
        username: user.username,
        password: user.password
      });
      return {
        id: result.insertedId,
        username: user.username
      };
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }
}

module.exports = UserRepository;