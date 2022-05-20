const mongoose = require("mongoose");
const Contender = require("./Contender").schema;

const GameSchema = new mongoose.Schema(
	{
		maddenYear: {
			type: Number,
			required: true,
		},
		gameYear: {
			type: Number,
			required: true,
		},
		gameType: {
			type: String,
			enum: ["bye", "wildcard", "divisional", "championship", "superbowl"],
			required: true,
		},
		winner: {
			type: Contender,
			required: true,
		},
		loser: {
			type: Contender,
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
