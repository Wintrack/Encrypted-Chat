require('dotenv').config();

module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://chat-database:27017/Encrypted-Chat',
}