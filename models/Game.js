const mongoose = require("mongoose");
const Contender = require("./Contender").schema;

const GameSchema = new mongoose.Schema(
	{
		gameYear: {
			type: Number,
			required: true,
		},
		gameType: {
			type: String,
			required: true,
		},
		winner: {
			type: Contender,
			required: true,
		},
		loser: {
			type: Contender,
			required: true,
		},
		winnerPoints: {
			type: Number,
			required: true,
		},
		loserPoints: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Game", GameSchema);
