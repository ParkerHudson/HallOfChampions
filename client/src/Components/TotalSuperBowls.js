import React from "react";

const TotalSuperBowls = (props) => {
	const games = props.gameArray;
	/*
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
    print array to screen


    */

	const countSuperBowlWins = (games) => {
		var superbowlWinners = [];
		var completed = false;

		for (let i = 0; i < games.length; i++) {
			if (games[i].gameType == "superbowl") {
				for (let j = 0; j < superbowlWinners.length; j++) {
					if (games[i].winner.player.username == superbowlWinners[j].username) {
						superbowlWinners[j].numSuperbowlWins++;
						completed = true;
						break;
					}
				}
				if (!completed) {
					superbowlWinners.push({
						username: games[i].winner.player.username,
						numSuperbowlWins: 1,
					});
				}
				completed = false;
			}
		}

		return superbowlWinners;
	};

	const sortArrayDescending = (array) => {
		array.sort((a, b) => {
			return parseFloat(b.numSuperbowlWins) - parseFloat(a.numSuperbowlWins);
		});
	};

	const arrayOfWinners = countSuperBowlWins(games);
	sortArrayDescending(arrayOfWinners);

	return (
		<>
			<div className="card">
				<h3 className="text-center card-title">Total Super Bowl Wins</h3>
				<ul className="list-group list-group-flush">
					{arrayOfWinners.map((playerObject) => {
						return (
							<li className="list-group-item">
								{playerObject.username} {playerObject.numSuperbowlWins}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default TotalSuperBowls;
