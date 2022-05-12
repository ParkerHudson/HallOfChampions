import React from "react";

const Team = (props) => {
	console.log(props);
	return (
		<>
			<li>{props.team.teamName}</li>
		</>
	);
};

export default Team;
