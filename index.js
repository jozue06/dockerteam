'use strict';

// require('dotenv').config();
require('babel-register');

// let MONGODB_URI = `mongodb://mongo:27017`

// let POSTGRES_URI = `postgres://postgres:${process.env.POSTGRES_PASSWORD}@psql:5432`
// let POSTGRES_URI = `postgres://${process.env.POSTGRES_PASSWORD}@psql:5432`
// postgres://user:password@host:5432/database
// needs to be a linux style constring NOT mac
// needs username and password and database name
// ubuntu only says password

/*
const pgClient = new Client({
  host: 'psql',
  port: 5432,
  password: `${process.env.POSTGRES_PASSWORD}`,
})

*/

// process.env.VAR_NAME style to access env

// MONGO
// ==========
// const mongoose = require('mongoose');
// mongoose.connect(MONGODB_URI);

// POSTGRES
// ==========
const { Client } = require('pg')
// const pgClient = new pg.Client(POSTGRES_URI);

// const pgClient = new Client({
//     connectionString: POSTGRES_URI
// });

const pgClient = new Client({
    host: 'psql',
    port: 5432,
    user: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
  });

// pgClient.connect()

pgClient.connect((err) => {
    if (err) {
      console.error('PSQL connection ERROR', err.stack)
    } else {
      console.log('connected to POSTGRES')
    }
  })

const app = require('./src/app.js');

app.start(8080);