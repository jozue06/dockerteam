const cors = require('cors');
const express = require('express');
const m_router = require('./routes/m_routes.js');
// const p_router = require('./routes/p_routes.js');

// import badId from './middleware/badId.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(m_router);
app.use(p_router);


// app.use(badId);


let serverOn = false;
// let server;

module.exports = {
  start: (port) => {
    if(!serverOn) {
      app.listen(port, (err) => {
        if(err) {throw err;}
        console.log('LISTENING ON PORT: ', port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    app.close( () => {
      console.log('Server has stopped');
    });
  },
  server: app,
};