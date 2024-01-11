const {
  MongoClient
} = require('mongodb');

class Database {
  constructor(url) {
    this.client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    this.db = null;
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db();
  }

  collection(name) {
    return this.db.collection(name);
  }
}

module.exports = Database;