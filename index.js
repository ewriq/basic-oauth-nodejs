const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { port } = require('./src/conf/config.js')
const homer = require('./src/router/home.js');
const db = require('./src/conf/database.js');

app.use('/', homer);


db();
app.listen(port,() => {
    console.log(`listening on ${port}`)
});