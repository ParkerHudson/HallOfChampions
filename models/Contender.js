const mongoose = require("mongoose");

const ContenderSchema = {
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Player",
		required: true,
	},
	seed: {
		type: Number,
		required: true,
	},
};

module.exports = mongoose.model("Contender", ContenderSchema);
