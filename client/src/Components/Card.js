import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { Link } from "react-router-dom";

//Takes in Title and array
//Take in array, map array, return card displaying top 5 of mapped array with link to full array

const Card = (props) => {
	const main = useContext(MainContext);

	const top5 = (array) => {
		var top5 = [];
		if (array.length > 5) {
			for (let i = 0; i < 5; i++) {
				top5[i] = array[i];
			}
			return top5;
		} else {
			return array;
		}
	};

	const onClickHandler = () => {};

	const top5Array = top5(props.array);
	return (
		<div className="card">
			<h3 className="text-center card-title">{props.Title}</h3>
			<ul className=" list-group list-group-flush">
				{top5Array.map((playerObject) => {
					return (
						<li className="list-group-item">
							{playerObject.username} {playerObject.count}
						</li>
					);
				})}
			</ul>
			<div className="card-body card-link">
				<Link to="/leaderboard" className="text-success">
					View All
				</Link>
			</div>
		</div>
	);
};

export default Card;
