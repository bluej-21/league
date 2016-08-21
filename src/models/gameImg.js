import mongoose from 'mongoose';

var GameImage = new mongoose.Schema({
  name: String,
  description: String,
  longDescription: String,
  img: {
    data: Buffer,
    contentType: String
  }
});

// src :so 14644545/random-document-from-a-collection-in-mongoose
GameImage.statics.random = (callback) => {
  this.count((err, count) => {
    if (err) { return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(callback);
    // .bind(this) ??
  });
};

module.exports = mongoose.model('GameImage', GameImage);
