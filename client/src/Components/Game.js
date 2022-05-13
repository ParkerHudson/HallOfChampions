import React from "react";

const Game = (props) => {
	console.log(props.game);
	return (
		<>
			<li>Game Year: {props.game.gameYear}</li>
			<li>Game Type: {props.game.gameType}</li>
			<li>Winner: {props.game.winner.player.username}</li>
			<li>Loser: {props.game.loser.player.username}</li>

			<li>
				Score: {props.game.winnerPoints} - {props.game.loserPoints}
			</li>
			<li></li>
		</>
	);
};

export default Game;
