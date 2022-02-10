const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
	answer: {
		type: String,
		// required: true,
	},
	points: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("vote", mySchema);
