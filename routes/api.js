const express = require("express");
const apiRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Todo = require("../models/Todo");
const Team = require("../models/Team");
const Player = require("../models/Player");

apiRouter.post(
	"/addTeam",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const team = new Team(req.body);
		team
			.save(team)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(500).json({
					message: {
						msgBody: "An error occured while adding team to database",
					},
				});
			});
	}
);

apiRouter.post(
	"/addPlayer",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const player = new Player(req.body);
		player
			.save(player)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(500).json({
					message: {
						msgBody: "An error occured while adding player to database",
					},
				});
			});
	}
);

apiRouter.get(
	"/getPlayers",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Player.find()
			.populate("username")
			.exec((err, document) => {
				if (err)
					res.status(500).json({
						message: { msgBody: "Error has occured", msgError: true },
					});
				else {
					res.status(200).json({ players: document, authenticated: true });
				}
			});
	}
);

apiRouter.delete(
	"/deletePlayer",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Player.findOneAndRemove(req.body, (err, data) => {
			if (err)
				res.status(500).json({
					message: { msgBody: "Error has occured", msgError: true },
				});
			else {
				res.status(200).json({
					message: { msgBody: data, msgError: false },
					authenticated: true,
				});
			}
		});
	}
);

module.exports = apiRouter;
