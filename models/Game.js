const mongoose = require("mongoose");

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
			id: { type: mongoose.Schema.Types.ObjectId, ref: "TeamSchema" },
		},
		loser: {
			id: { type: mongoose.Schema.Types.ObjectId, ref: "TeamSchema" },
		},
		score: {
			type: int,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Game", GameSchema);
