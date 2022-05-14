import React, { useState, useEffect } from "react";
import AllGames from "./AllGames";
import GameService from "../Services/GameService";
import TotalSuperBowls from "./TotalSuperBowls";

const Home = () => {
	const [games, setGames] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		GameService.getGames().then((data) => {
			setGames(data.Games);
			setIsLoaded(true);
		});
	}, []);

	return (
		<>
			<h1 className="text-center">Hall of Champions</h1>
			{isLoaded ? (
				<div className="container text-white">
					<div className="row">
						{/* 	<AllGames gameArray={games} /> */}
						<div className="col-sm p-1">
							{isLoaded ? (
								<TotalSuperBowls gameArray={games} />
							) : (
								<h1>loading...</h1>
							)}
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
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default Home;
