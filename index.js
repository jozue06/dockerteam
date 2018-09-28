// const express = require('express')
// const app = express()
// const port = 8080
// dont know if this is correctly exposing this outside the container or does it matter if the server runs outside
// const routes = require('./src/routes/routes.js')

// app.use(express.static, '/src')
// app.use(routes)

// app.get('/', (req, res) => res.send('Helasdasdlo World!'))

// put routes here to hit the mongo and psql DBs that are running

// connect to mongod with mongoose here too because at this point mongo and psql are fired up and running on their exposed ports

// "connect" to psql?

// mongo = 27017
// psql = 3309

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


'use strict';

// require('dotenv').config();
require('babel-register');

// how to set the inter-container networked mongo db = host name isnt localhost?
// the docker-compose service name can be the host name?

// let mongoUri = 'mongodb://mongo:27017'
let mongoUri = 'mongodb://localhost:27017'

const mongoose = require('mongoose');
mongoose.connect(mongoUri);

const app = require('./src/app.js');

// make it static to not pass it ENV
app.start(8080);