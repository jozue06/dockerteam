const express = require('express')
const User = require('../models/model.js');

const router = express.Router()

function sendJSON(res,data) {
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
        res.end();
    };

router.get('/', (req, res) => res.send('ROUTER Hello World!'))

router.get('/user', (req, res) => {

    // res.send('user route')
  User.find({})
    .then( data => {
      res.send(data);
    })
    .catch( err => console.log(err) );
});

router.post('/user', (req,res) => {

    console.log('POST object length: ', Object.keys(req.body).length);
    console.log('POST object content: ', req.body);

  
    // if(!Object.keys(req.body).length) {
    //   badReq(res);
    // }
    
    let newUser = new User(req.body);
    newUser.save()
      .then( data => sendJSON(res,data))
      .catch( err => console.log(err) );
    });

module.exports = router;