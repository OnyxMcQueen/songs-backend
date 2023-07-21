//DEPENDENCIES
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const songController = require('./controllers/songController');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTES

app.get('/', (req, res) => {
    res.send('Welcome to Tuner!')
});

app.use('/songs', songController);


app.get('*', (req, res) => {
    res.status(404).send('Error - Page Could Not Be Found :(');
})

//EXPORT
module.exports = app;
