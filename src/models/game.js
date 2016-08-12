var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
	name: String,
	numberPlayers: Number,
	Players: [Number], // player ids
	Teams: [[Number]], // list of player ids, each list is a team
	winner: [Number] // prereq: wineer in Team
});

module.exports = mongoose.model('Game', GameSchema);
