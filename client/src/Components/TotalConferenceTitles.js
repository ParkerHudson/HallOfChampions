import React, { useState } from "react";
import Card from "./Card";

const TotalConferenceTitles = (props) => {
	const games = props.gameArray;
	/*

	Returns array of championship championship winners sorted by # of wins
	-------------------------------------------------------
    Create array of players sorted by # of super bowl wins
    Display ordered list with player name and number of wins

    create array for players with super bowl wins
    array will store json objects with username field and # of wins field

    loop through array of games, 
    if gameType is championship,
    check array for matching username,
    if username is there increment # of super bowl wins,
    if username is not found, create new object with username and set super bowl wins to 1

    sort array by # of wins
    return array of winners


    */

	const countChampionships = (games) => {
		var championshipWinners = [];
		var completed = false;

		for (let i = 0; i < games.length; i++) {
			if (games[i].gameType == "championship") {
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

	return <Card array={arrayOfWinners} Title={"Total Championship Wins"} />;
};

export default TotalConferenceTitles;
