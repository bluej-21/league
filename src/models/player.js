var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
	name: String,
	numberGames: { type: Number, default: 0 },
	numberGamesWon: { type: Number, default: 0 },
	numberGamesLost: { type: Number, default: 0 },
	playedWith: [Number], // player ids
	playedAgainst: [Number], // player ids
	gamesPlayed: [Number], // game ids
  leaguesIn: [Number] // league ids
});
	/* 
	 * the leaugesIn is if we want to add *users*, which we will recognize with
	 * one or more of: 
	 * 1. email
	 * 2. fb
	 * 3. google
	 * 4. github
	 * idk which one we should pick, or if all 
	 */

module.exports = mongoose.model('Player', PlayerSchema);
