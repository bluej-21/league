var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
	name: String,
	numberPlayers: Int,
	Players: [Int], // player ids
	Teams: [[Int]], // list of player ids, each list is a team
	/* 
	 * if only two players, Teams gets populated as follows:
	 * [ [0x4t5], [31x42] ]
	 */
	winner: [Int] // prereq: wineer in Team
});

module.exports = mongoose.model('Game', GameSchema);
