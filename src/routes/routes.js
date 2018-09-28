const express = require('express')
// import User from '../models/model.js';

const router = express.Router()

router.get('/', (req, res) => res.send('ROUTER Hello World!'))

router.get('/user', (req, res, next) => {

    console.log('user get all route')
//   User.find({})
//     .then( data => {
//       res.send(data);
//     })
//     .catch( err => console.log(err) );
});

router.post('/user', (req,res,next) => {

    console.log('POST object length: ', Object.keys(req.body).length);
    console.log('POST object content: ', req.body);

  
    // if(!Object.keys(req.body).length) {
    //   badReq(res);
    // }
    
    // let newUser = new User(req.body);
    // newUser.save()
    //   .then( data => sendJSON(res,data))
    //   .catch( next );
  });

module.exports = router;