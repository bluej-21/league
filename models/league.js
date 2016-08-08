var mongoose = require('mongoose');

var LeagueSchema = mongoose.Schema({
	name: String,
	numberPlayers: Int,
	numberGames: Int,
	Players: [Int], // player ids 
	Games: [Int], // game ids
	Admins: [Int] // admin ids
});

module.exports = mongoose.model('League', LeaugeSchema);
