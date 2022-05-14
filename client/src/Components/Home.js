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
			<h1 className="text-center">Hall of Champions</h1>
			<div className="container text-white">
				<div className="row">
					{/* 	<AllGames gameArray={games} /> */}
					<div className="col">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col">
						<TotalSuperBowls gameArray={games} />
					</div>
				</div>
				<div className="row py-4">
					{/* 	<AllGames gameArray={games} /> */}
					<div className="col">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col">
						<TotalSuperBowls gameArray={games} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
