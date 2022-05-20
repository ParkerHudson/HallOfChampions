import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import TotalSuperBowls from "./TotalSuperBowls";
import TotalConferenceTitles from "./TotalConferenceTitles";
import TotalDivisionTitles from "./TotalDivisionTitles";
import Leaderboard from "./Leaderboard";
import M22SuperBowls from "./M22Superbowls";
import M22ConferenceTitles from "./M22ConferenceTitles";

const Home = () => {
	const main = useContext(MainContext);

	return (
		<>
			{main.isLoaded ? (
				<>
					{
						{
							default: (
								<>
									<h1 className="text-center">Hall of Champions</h1>
									<div className="container text-white">
										<div className="row">
											<div className="col-sm p-1">
												<TotalSuperBowls gameArray={main.games} />
											</div>
											<div className="col-sm p-1">
												<TotalConferenceTitles gameArray={main.games} />
											</div>
											<div className="col-sm p-1">
												<TotalDivisionTitles gameArray={main.games} />
											</div>
										</div>
										<div className="row">
											<div className="col-sm p-1">
												<M22SuperBowls gameArray={main.games} />
											</div>
											<div className="col-sm p-1">
												<M22ConferenceTitles gameArray={main.games} />
											</div>
											<div className="col-sm p-1"></div>
										</div>
									</div>
								</>
							),
							leaderboard: (
								<>
									<Leaderboard />
								</>
							),
						}[main.display]
					}
				</>
			) : (
				<>
					<h1>Loading data from database . . .</h1>
				</>
			)}
		</>
	);
};

export default Home;
