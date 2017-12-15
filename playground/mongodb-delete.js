const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //findManyAndDelete(db, {name: 'Alex'});
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a32d10cca52f890e1cb1882')}).then((result) => {
        console.log(result);
    });
    //db.close();
});

var findManyAndDelete = (db, queryObject) => {
    db.collection('Users').find(queryObject).count().then((count) => {
        if(count > 1) {
            db.collection('Users').deleteMany(queryObject).then((result) => {
                console.log(result);
            });
        }
        else {
            console.log(`Not enought records : ${count}`)
        }
    }, (err) => {
        console.log(`Unable to fetch todos ${err}`)
    });
}