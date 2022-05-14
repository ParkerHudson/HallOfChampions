import React, { useState, useEffect } from "react";
import GameService from "../Services/GameService";
import Game from "./Game";

//Display history of all games in database

const AllGames = (props) => {
	const games = props.gameArray;

	return (
		<>
			<h1>All Game Data</h1>
			<ul>
				{games.map((gameObject) => {
					return <Game key={gameObject._id} game={gameObject} />;
				})}
			</ul>
		</>
	);
};

export default AllGames;
