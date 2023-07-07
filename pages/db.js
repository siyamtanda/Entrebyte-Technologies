// db.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Update with your MongoDB server URI
const dbName = 'your-database-name'; // Update with your database name

let client;

const connect = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const getClient = () => client;
const getDb = () => client.db(dbName);

module.exports = { connect, getClient, getDb };
