const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
    const client = await MongoClient.connect('mongodb+srv://MyBlog:MyBlog@cluster0.be3ay5g.mongodb.net/test');
    database = client.db('MyBlog');
}
 
function getDb() {
    if (!database) {
      throw { message: 'Database connection not established!' };
    }
    return database;
  }
  
  module.exports = {
    connectToDatabase: connect,
    getDb: getDb
  };