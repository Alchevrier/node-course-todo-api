// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log(`Unable to insert todo ${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Alex',
    //     age: 24,
    //     location: '19 Mortlock Avenue, Cambridge, CB4 1TD'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log(`Unable to insert todo ${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});