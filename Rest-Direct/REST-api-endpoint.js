const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const uri = 'mongodb+srv://zane_adamson:Millb0y2@cluster1.rjwimzh.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
let db;

Client.connect(err => {
    if (err) throw err;
    db = client.db(user_auth);
});

app.get('/', (req,res) => {
    db.collection(users).find().toArray((err,result) => {
        if (err) throw err;
        res.send(result);
    });
});
