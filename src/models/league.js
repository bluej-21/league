import mongoose from 'mongoose';

const LeagueSchema = new mongoose.Schema({
  name: String,
  numberPlayers: Number,
  numberGames: Number,
  Players: [Number], // player ids
  Games: [Number], // game ids
  Admins: [Number], // admin ids
});

module.exports = mongoose.model('League', LeagueSchema);
