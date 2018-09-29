'use strict';

// require('dotenv').config();
require('babel-register');

let MONGODB_URI = 'mongodb://localhost:27017/'
let POSTGRES_URI = 'postgres://localhost:5432/'

// MONGO
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

// POSTGRES
const pg = require('pg');
const pgClient = new pg.Client(POSTGRES_URI);
pgClient.connect()

const app = require('./src/app.js');

app.start(8080);


/*
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// postgres stuff
const pg = require('pg');
const pgClient = new pg.Client(process.env.POSTGRES_URI);
pgClient.connect()
*/