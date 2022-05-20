import React, { useState } from "react";
import Card from "./Card";

const M22DivisionTitles = (props) => {
	const games = props.gameArray;

	const countChampionships = (games) => {
		var championshipWinners = [];
		var completed = false;

		for (let i = 0; i < games.length; i++) {
			if (
				(games[i].gameType == "bye" || games[i].gameType == "wildcard") &&
				games[i].maddenYear == 2022
			) {
				if (
					games[i].winner.seed == 1 ||
					games[i].winner.seed == 2 ||
					games[i].winner.seed == 3 ||
					games[i].winner.seed == 4
				) {
					for (let j = 0; j < championshipWinners.length; j++) {
						if (
							games[i].winner.player.username == championshipWinners[j].username
						) {
							championshipWinners[j].count++;
							completed = true;
							break;
						}
					}
					if (!completed) {
						championshipWinners.push({
							username: games[i].winner.player.username,
							count: 1,
						});
					}
					completed = false;
				}
				if (
					games[i].loser.seed == 1 ||
					games[i].loser.seed == 2 ||
					games[i].loser.seed == 3 ||
					games[i].loser.seed == 4
				) {
					for (let k = 0; k < championshipWinners.length; k++) {
						if (
							games[i].loser.player.username == championshipWinners[k].username
						) {
							championshipWinners[k].count++;
							completed = true;
							break;
						}
					}
					if (!completed) {
						championshipWinners.push({
							username: games[i].loser.player.username,
							count: 1,
						});
					}
					completed = false;
				}
			}
		}
		return championshipWinners;
	};

	const sortArrayDescending = (array) => {
		array.sort((a, b) => {
			return parseFloat(b.count) - parseFloat(a.count);
		});
	};

	const arrayOfWinners = countChampionships(games);
	sortArrayDescending(arrayOfWinners);

	return <Card array={arrayOfWinners} Title={"M22 Division Titles"} />;
};

export default M22DivisionTitles;
