const express = require('express')
const User = require('../models/model.js')

const router = express.Router()
const pg = require('pg');
const client = new pg.Client('postgres://localhost:5432/');
client.connect();
client.on('error', error => {
  console.error(error);
});

loadDB()
function loadDB() {
    // COMMENT: What number(s) of the full-stack-diagram.png image correspond to the following line of code? Which method of article.js is interacting with this particular piece of `server.js`? What part of CRUD is being enacted/managed by this particular piece of code?
    // PUT YOUR RESPONSE HERE
    client.query(`
      CREATE TABLE IF NOT EXISTS articles (
        article_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        "authorUrl" VARCHAR (255),
        category VARCHAR(20),
        "publishedOn" DATE,
        body TEXT NOT NULL);`
    )
    //   .then(() => {
    //     loadArticles();
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/mongo', (req, res, next) => {
  console.log('mongo user get route')
    // res.send('user route')
  User.find({})
    .then( data => {
        console.log('user route')
      res.send(data);
    })
    .catch( err => console.log(err) );
});

router.post('/mongo', (req,res,next) => {
    console.log('mongo user get route')
    console.log('POST object length: ', Object.keys(req.body).length);
    console.log('POST object content: ', req.body);

  
    if(!Object.keys(req.body).length) { 
      badReq(res);
    }
    
    let newUser = new User(req.body);
    newUser.save()
      .then( data => { 
        console.log('pkjdlkjasd')  
        sendJSON(res,data)})
      .catch( next );
  });


  router.get('/pgdb', (req, res) => {
    client.query(`SELECT * articles;`)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.error(err)
      });
  });
  

module.exports = router;