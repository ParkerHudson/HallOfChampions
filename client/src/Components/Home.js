import React, { useState, useEffect } from "react";
import AllGames from "./AllGames";
import GameService from "../Services/GameService";
import TotalSuperBowls from "./TotalSuperBowls";

const Home = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		GameService.getGames().then((data) => {
			setGames(data.Games);
		});
	}, []);
	return (
		<>
			<h1>Hall of Champions Data</h1>

			<p>This is a test</p>
			{/* 	<AllGames gameArray={games} /> */}
			<TotalSuperBowls gameArray={games} />
		</>
	);
};

export default Home;
