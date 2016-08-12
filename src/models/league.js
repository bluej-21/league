var mongoose = require('mongoose');
var LeagueSchema = mongoose.Schema({
	name: String,
	numberPlayers: Number,
	numberGames: Number,
	Players: [Number], // player ids 
	Games: [Number], // game ids
	Admins: [Number] // admin ids
});

module.exports = mongoose.model('League', LeagueSchema);
