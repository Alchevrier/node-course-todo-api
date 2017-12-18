const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a3770e833570d44c561a45a1';

// if (!ObjectID.isValid(id)) {
//     return console.log(`${id} is not a valid ObjectID`);
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos ${todos}`)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todo ${todo}`)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log(`Todo by id ${todo}`)
// }).catch((e) => console.log(e));

var userId = '5a36def0d84fa802bcdd0a10';

// User.findById

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(`User ${user}`);
}).catch((e) => console.log(e));
