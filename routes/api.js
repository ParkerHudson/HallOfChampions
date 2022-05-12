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
		const team = new Team({ teamName: req.body.teamName });
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
		const player = new Player({ username: req.body.username });
		player
			.save(player)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(500).json({
					message: {
						msgBody: `An error has occured: ${err}`,
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
			//.populate("username")
			.populate("team")
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

//Assign Team

apiRouter.post(
	"/assignTeam",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Team.findOne({ teamName: req.body.team }, (err, teamObject) => {
			if (err)
				res.status(500).json({
					message: {
						msgBody: "Error has occured when finding team",
						msgError: true,
					},
				});
			else {
				Player.findOneAndDelete(
					{ username: req.body.username },
					(err, playerObject) => {
						if (err)
							res.status(500).json({
								message: {
									msgBody: "Error has occured when finding username",
									msgError: true,
								},
							});
						else {
							let tempTeam = {};
							const newPlayerTeam = Object.assign(tempTeam, teamObject);
							const player = new Player({
								username: playerObject.username,
								team: newPlayerTeam,
							});

							player
								.save(player)
								.then((data) => {
									res.send(data);
								})
								.catch((err) => {
									res.status(500).json({
										message: {
											msgBody: `An error has occured: ${err}`,
										},
									});
								});
						}
					}
				);
			}
		});
	}
);

//Get Team
apiRouter.get(
	"/getTeams",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Team.find().exec((err, document) => {
			if (err)
				res.status(500).json({
					message: { msgBody: "Error has occured", msgError: true },
				});
			else {
				res.status(200).json({ Teams: document, authenticated: true });
			}
		});
	}
);

//Remove Team

//Update Team

//Update Player

//Add Game

//Remove Game

//Update Game

//Get Game

module.exports = apiRouter;
