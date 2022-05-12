import React from "react";

const Player = (props) => {
	if (props.username.team != null) {
		return (
			<>
				<li>
					{props.username.username}, Owner of the {props.username.team.teamName}
				</li>
			</>
		);
	} else {
		return (
			<>
				<li>{props.username.username}, currently teamless</li>
			</>
		);
	}
};

export default Player;
