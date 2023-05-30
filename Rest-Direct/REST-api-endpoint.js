const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const uri = '';
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
