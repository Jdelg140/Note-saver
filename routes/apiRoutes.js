const app = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../utils/fsUtils')
const uuid = require('../utils/uuid')

app.get('/notes', (req, res) =>
    readFromFile('./db/db.json')
        .then(data => {
            res.json(JSON.parse(data))
        })
);

app.post('/notes', (req, res) => {
    console.log(req.body)
    const { title, text } = req.body
    const newNote = {
        title,
        text,
        id: uuid()
    }

readAndAppend(newNote,'./db/db.json')

});

module.exports = app;