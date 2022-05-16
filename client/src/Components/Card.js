import React from "react";

//Takes in Title and array
//Take in array, map array, return card displaying mapped array

const Card = (props) => {
	return (
		<div className="card">
			<h3 className="text-center card-title">{props.Title}</h3>
			<ul className=" list-group list-group-flush">
				{props.array.map((playerObject) => {
					return (
						<li className="list-group-item">
							{playerObject.username} {playerObject.count}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Card;
