// To start up mongo server
// /Users/"Jeff Slavin"/mongodb/bin/mongod.exe --dbpath=/Users/"Jeff Slavin"/mongodb-data

const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());    // automatically parses incoming data as JSON to an object

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch ((error) => {
        res.status(400).send(error);
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task);
    }).catch ((error) => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});