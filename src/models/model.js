import mongoose from 'mongoose';

const User = mongoose.Schema({
  name: { type: String, uppercase: true}
});

export default mongoose.model('User', User);