
const mongoose =require('mongoose');


const User = mongoose.Schema({
  name: { type: String, uppercase: true}
});

module.exports = mongoose.model('User', User);