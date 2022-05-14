import React, { useState, useEffect } from "react";
import AllGames from "./AllGames";
import GameService from "../Services/GameService";
import TotalSuperBowls from "./TotalSuperBowls";
import Bracket from "./Bracket";

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
			<div className="container ">
				<div className="row">
					{/* 	<AllGames gameArray={games} /> */}
					<div className="col-sm p-1">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col-sm p-1">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col-sm p-1">
						<TotalSuperBowls gameArray={games} />
					</div>
				</div>
				<div className="row">
					{/* 	<AllGames gameArray={games} /> */}
					<div className="col-sm p-1">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col-sm p-1">
						<TotalSuperBowls gameArray={games} />
					</div>
					<div className="col-sm p-1">
						<TotalSuperBowls gameArray={games} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
