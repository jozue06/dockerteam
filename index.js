'use strict';

// require('dotenv').config();
require('babel-register');

// let MONGODB_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;

let MONGODB_URI = 'mongodb://mongo:27017'

// let MONGODB_URI =`mongodb://localhost:27017`
// MongoNetworkError: failed to connect to server [localhost:27017] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]
/*
mongoose.connect('mongodb://user:pass@localhost:port/database');

// OR replica sets
var uri = 'mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/mydatabase';
mongoose.connect(uri);

*/

// let POSTGRES_URI = `postgres://postgres:${process.env.POSTGRES_PASSWORD}@psql:5432`
// let POSTGRES_URI = `postgres://${process.env.POSTGRES_PASSWORD}@psql:5432`
// postgres://user:password@host:5432/database
// needs to be a linux style constring NOT mac
// needs username and password and database name
// ubuntu only says password

// process.env.VAR_NAME style to access env

/*
// MONGO user make stuff
var opt = {
    user: config.username,
    pass: config.password,
    auth: {
        authdb: 'admin'
    }
};
var connection = mongoose.createConnection(config.database.host, 'mydatabase', config.database.port, opt);
*/
// MONGO
// ==========
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI, function(error) {
    console.log('ERROR with connecting with MONGO',error)
});
// POSTGRES
// ==========
// const { Client } = require('pg')
// const pgClient = new Client({
//     host: 'psql',
//     port: 5432,
//     user: `${process.env.POSTGRES_USER}`,
//     password: `${process.env.POSTGRES_PASSWORD}`,
//   });

// pgClient.connect((err) => {
//     if (err) {
//       console.error('PSQL connection ERROR', err.stack)
//     } else {
//       console.log('connected to POSTGRES')
//     }
//   })

const app = require('./src/app.js');

app.start(8080);

// module.exports = pgClient;