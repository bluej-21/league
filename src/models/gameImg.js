import mongoose from 'mongoose';

const GameImage = new mongoose.Schema({
  name: String,
  description: String,
  longDescription: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model('GameImage', GameImage);

