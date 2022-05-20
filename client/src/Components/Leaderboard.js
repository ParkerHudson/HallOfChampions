import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const Leaderboard = () => {
	const main = useContext(MainContext);

	return (
		<>
			<table className="table table-hover">
				<thread>
					<tr>
						<th scope="col">Player</th>
						<th scope="col">Count</th>
					</tr>
				</thread>
				{main.games.map((playerObject) => {
					return (
						<tr className="table-dark">
							<th scope="row">{playerObject.username}</th>
							<td>{playerObject.count}</td>
						</tr>
					);
				})}
			</table>
		</>
	);
};

export default Leaderboard;
