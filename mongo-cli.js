const {MongoClient} = require('mongodb')

const uri = "mongodb+srv://tom:1Meta-Mesa1@cluster0.cdkh5.mongodb.net/m-share?retryWrites=true&w=majority";

const client = new MongoClient(uri);

module.exports = client;
