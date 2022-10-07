const express = require('express');
const path= require('path');
const favicon = require ('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const port = process.env.PORT || 3001

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.json(_dirname, 'build', 'favicon.ico')));
app.use(express.static(path.json(_dirname, 'build')));

app.use('/api/users', require('./routes/api/users'))

app.get('/*', (req, res) => {
    res.sendFile(path.json(_dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
