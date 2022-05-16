import React, { useState } from "react";
import Card from "./Card";

const TotalDivisionTitles = (props) => {
	const games = props.gameArray;

	const countChampionships = (games) => {
		var championshipWinners = [];
		var completed = false;

		for (let i = 0; i < games.length; i++) {
			if (
				games[i].winner.player.seed == 1 ||
				games[i].winner.player.seed == 2 ||
				games[i].winner.player.seed == 3 ||
				games[i].winner.player.seed == 4
			) {
				if (games[i].gameType == "bye" || games[i].gameType == "wildcard") {
					for (let j = 0; j < championshipWinners.length; j++) {
						if (
							games[i].winner.player.username == championshipWinners[j].username
						) {
							championshipWinners[j].count++;
							completed = true;
							break;
						}
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

	return <Card array={arrayOfWinners} Title={"Total Division Titles"} />;
};

export default TotalDivisionTitles;
