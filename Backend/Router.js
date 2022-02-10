const express = require("express");

const router = express.Router();
const Vote = require("./Model");

const Pusher = require("pusher");

const pusher = new Pusher({
	appId: "1345632",
	key: "4f50e19de914cb7872cc",
	secret: "446ae545d510ffe6087e",
	cluster: "eu",
	useTLS: true,
});

router.get("/", (req, res) => {
	const allVote = Vote.find().then((votes) => {
		res.status(200).json({
			data: allVote.length,
			votes,
		});
	});
});

router.post("/poll", (req, res) => {
	const newVote = {
		answer: req.body.answer,
		points: 1,
	};

	new Vote(newVote).save().then((vote) => {
		pusher.trigger("my-poll", "my-vote", {
			points: parseInt(vote.points),
			answer: vote.answer,
		});

		return res.json({
			message: "you successfully vote for this man",
			newVote,
		});
	});
});

module.exports = router;
