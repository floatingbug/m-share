const {MongoClient} = require('mongodb')
const password = process.env.PASSWORD;

const uri = `mongodb+srv://tom:${password}@cluster0.cdkh5.mongodb.net/m-share?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

module.exports = client;
