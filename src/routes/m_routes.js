// MONGO Routes

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

function noId(res) {
  res.statusCode = 404;
  res.statusMessage = 'not found';
  res.end();
};

function badReq(res) {
  res.statusCode = 400;
  res.statusMessage = 'bad request';
  res.end();
};

router.get('/', (req, res) => res.send('ROUTER AAAAAAA World!'))

router.get('/getuser', (req, res) => {

  User.find({})
    .then( data => {
      res.send(data);
    })
    .catch( err => console.log(err) );
});

router.post('/adduser', (req,res) => {

    // console.log('POST object length: ', Object.keys(req.body).length);
    // console.log('POST object content: ', req.body);

    if(!Object.keys(req.body).length) {
      badReq(res);
    }
    
    let newUser = new User(req.body);
    newUser.save()
      .then( data => sendJSON(res,data))
      .catch( err => console.log(err) );
    });

    router.put('/update/user/:id', (req,res,next) => {
  
      if(Object.keys(req.body).length === 0) {
        // console.log('INSIDE FAILED PUT: ', req.body);
        badReq(res);
      }
      
      if(req.params.id) {
        let updateTarget = { _id: `${req.params.id}` };
        let updateContent;
        
        if(req.body.name){
          updateContent = { name : `${req.body.name}`};
        } else if(req.body.color) {
          updateContent = { color : `${req.body.color}`};
        }
      
        User.findOneAndUpdate(updateTarget, updateContent, {new:true})
          .then( data => {
            //update the sendJSON to give back the UPDATED object
            // console.log(data);
            sendJSON(res,data);
          })
          .catch( err => {
            noId(err);
          } );
        
      }
      
    });
    router.delete('/delete/user/:id', (req,res,next) => {
      User.remove({_id: `${req.params.id}`})
      //findOneDelete
        .then( data => sendJSON(res,data))
        .catch( next );
    });
    
    //i have it named like this to prevent misshaps
    router.delete('/deleteall', (req,res,next) => {
      User.deleteMany({})
        .then( data => sendJSON(res,data))
        .catch( next );
    });

module.exports = router;