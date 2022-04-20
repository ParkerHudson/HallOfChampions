const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Player", PlayerSchema);
