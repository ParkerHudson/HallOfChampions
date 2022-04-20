const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
	teamName: {
		type: String,
		required: true,
	},
	teamLogo: {
		type: String, //TODO: Add support for image storage
	},
});

module.exports = mongoose.model("Team", TeamSchema);
