import React, { useState } from "react";
import Card from "./Card";

const M22SuperBowls = (props) => {
	const games = props.gameArray;
	/*

	Returns array of super bowl winners sorted by # of wins
	-------------------------------------------------------
    Create array of players sorted by # of super bowl wins
    Display ordered list with player name and number of wins

    create array for players with super bowl wins
    array will store json objects with username field and # of wins field

    loop through array of games, 
    if gameType is superbowl,
    check array for matching username,
    if username is there increment # of super bowl wins,
    if username is not found, create new object with username and set super bowl wins to 1

    sort array by # of wins
    return array of winners


    */

	const countSuperBowlWins = (games) => {
		var superbowlWinners = [];
		var completed = false;

		for (let i = 0; i < games.length; i++) {
			if (games[i].gameType == "superbowl" && games[i].loser !== null) {
				for (let j = 0; j < superbowlWinners.length; j++) {
					if (games[i].winner.player.username == superbowlWinners[j].username) {
						superbowlWinners[j].count++;
						completed = true;
						break;
					}
				}
				if (!completed) {
					superbowlWinners.push({
						username: games[i].winner.player.username,
						count: 1,
					});
				}
				completed = false;
			}
		}
		return superbowlWinners;
	};

	const sortArrayDescending = (array) => {
		array.sort((a, b) => {
			return parseFloat(b.count) - parseFloat(a.count);
		});
	};

	const arrayOfWinners = countSuperBowlWins(games);
	sortArrayDescending(arrayOfWinners);

	return <Card array={arrayOfWinners} Title={"M22 Super Bowl Wins"} />;
};

export default M22SuperBowls;
