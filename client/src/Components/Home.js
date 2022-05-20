import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import TotalSuperBowls from "./TotalSuperBowls";
import TotalConferenceTitles from "./TotalConferenceTitles";
import TotalDivisionTitles from "./TotalDivisionTitles";
import M22SuperBowls from "./M22Superbowls";
import M22ConferenceTitles from "./M22ConferenceTitles";
import M22DivisionTitles from "./M22DivisionTitles";
import Bracket from "./Bracket";

const Home = () => {
	const main = useContext(MainContext);

	return (
		<>
			{main.isLoaded ? (
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
							<div className="col-sm p-1">
								<M22DivisionTitles gameArray={main.games} />
							</div>
						</div>
					</div>
					<div>
						<h1>Bracket Data Coming Soon . . .</h1>
						{/* <Bracket gameArray={main.games} /> */}
					</div>
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
