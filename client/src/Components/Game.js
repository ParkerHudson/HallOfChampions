import React from "react";

const Game = (props) => {
	const game = props.game;
	return (
		<>
			<li>Game Year: {game.gameYear}</li>
			<li>Game Type: {game.gameType}</li>
			<li>Winner: {game.winner.player.username}</li>
			<li>Loser: {game.loser.player.username}</li>
			<li>
				Score: {game.winnerPoints} - {game.loserPoints}
			</li>
			<br></br>
		</>
	);
};

export default Game;
