const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  partidasGanadas: {
    type: Number,
    default: 0, 
  },
  partidasPerdidas: {
    type: Number,
    default: 0, 
  },
  Zapatos: {
    type: Number,
    default: 0, 
  },
});

userSchema.set('toJSON', {
  transform :(document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;