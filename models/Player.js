const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		team: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Team",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Player", PlayerSchema);
