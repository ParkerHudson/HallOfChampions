const express = require("express");
const apiRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Todo = require("../models/Todo");
const Team = require("../models/Team");
const Player = require("../models/Player");
const Game = require("../models/Game");
const Contender = require("../models/Contender");

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
		Team.findOne({ teamName: req.body.team.teamName }, (err, teamObject) => {
			if (err)
				res.status(500).json({
					message: {
						msgBody: "Error has occured when finding team",
						msgError: true,
					},
				});
			else {
				if (teamObject != null) {
					let tempTeam = {};
					const newPlayerTeam = Object.assign(tempTeam, teamObject);
					const player = new Player({
						username: req.body.player.username,
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
				} else {
					const player = new Player({
						username: req.body.player.username,
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

apiRouter.post(
	"/addGame",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		var temp = {};
		Player.findOne({ username: req.body.winner }, (err, playerObject) => {
			if (err)
				res.status(500).json({
					message: {
						msgBody: "Error has occured when finding player",
						msgError: true,
					},
				});
			else {
				temp = Object.assign(temp, playerObject);
				var givenWinner = new Contender({
					player: temp,
					seed: req.body.winnerSeed,
				});

				if (req.body.loser == "") {
					const game = new Game({
						gameYear: req.body.gameYear,
						gameType: req.body.gameType,
						winner: givenWinner,
						loser: null,
						winnerPoints: req.body.winnerPoints,
						loserPoints: req.body.loserPoints,
					});
					game
						.save(game)
						.then((data) => {
							res.send(data);
						})
						.catch((err) => {
							res.status(500).json({
								message: {
									msgBody: `An error occured while adding game to database. Error: ${err}`,
								},
							});
						});
				} else {
					Player.findOne({ username: req.body.loser }, (err, playerObject) => {
						if (err)
							res.status(500).json({
								message: {
									msgBody: "Error has occured when finding player",
									msgError: true,
								},
							});
						else {
							temp = Object.assign(temp, playerObject);
							var givenLoser = new Contender({
								player: temp,
								seed: req.body.loserSeed,
							});

							const game = new Game({
								gameYear: req.body.gameYear,
								gameType: req.body.gameType,
								winner: givenWinner,
								loser: givenLoser,
								winnerPoints: req.body.winnerPoints,
								loserPoints: req.body.loserPoints,
							});
							game
								.save(game)
								.then((data) => {
									res.send(data);
								})
								.catch((err) => {
									res.status(500).json({
										message: {
											msgBody: `An error occured while adding game to database. Error: ${err}`,
										},
									});
								});
							console.log("Temp: " + temp);
							console.log("Winner: " + givenWinner);
							console.log("Loser: " + givenLoser);
						}
					});
				}
			}
		});
	}
);
//Remove Game

//Update Game

//Get Game

apiRouter.get(
	"/getGames",

	(req, res) => {
		Game.find()
			.populate("winner.player")
			.populate("loser.player")
			.exec((err, document) => {
				if (err)
					res.status(500).json({
						message: { msgBody: "Error has occured", msgError: true },
					});
				else {
					res.status(200).json({ Games: document, authenticated: true });
				}
			});
	}
);

module.exports = apiRouter;
