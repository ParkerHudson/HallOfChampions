const mongoose = require("mongoose");

const contender = {
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Player",
		required: true,
	},
	seed: {
		type: int,
		required: true,
	},
};

const GameSchema = new mongoose.Schema(
	{
		gameYear: {
			type: int,
			required: true,
		},
		gameType: {
			type: String,
			required: true,
		},
		winner: {
			contender,
			required: true,
		},
		loser: {
			contender,
			required: true,
		},
		score: {
			type: int,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Game", GameSchema);
