import React, { useState } from "react";
import TeamService from "../Services/TeamService";
const Admin = () => {
	const [TeamName, setTeamName] = useState("");

	const onChange = (e) => {
		setTeamName({ teamName: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(TeamName);
		TeamService.postTeam(TeamName);
	};

	return (
		<>
			<h1>Welcome Commish Mafia member</h1>
			<label>Insert Team Name</label>
			<input type="text" onChange={onChange} />
			<button className="btn btn-lg btn-primary btn-block" onClick={onSubmit}>
				Add Team to Database
			</button>
		</>
	);
};

export default Admin;
