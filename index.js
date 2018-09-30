'use strict';

// require('dotenv').config();
require('babel-register');

let MONGODB_URI = 'mongodb://mongo:27017'

// MONGO
// ==========
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI, function() {
    console.log('connecting with MONGO')
});

let POSTGRES_URI = `postgresql://postgres:${process.env.POSTGRES_PASSWORD}@psql:5432`
// POSTGRES
// ==========
const { Client } = require('pg')
// const pgClient = new Client({
//     host: 'psql',
//     port: 5432,
//     user: `${process.env.POSTGRES_USER}`,
//     password: `${process.env.POSTGRES_PASSWORD}`,
//   });
const pgClient = new Client(POSTGRES_URI);

pgClient.connect((err) => {
    if (err) {
      console.error('PSQL connection ERROR', err.stack)
    } else {
      console.log('connected to POSTGRES')
    }
  })

const app = require('./src/app.js');

app.start(8080);

// module.exports = pgClient;