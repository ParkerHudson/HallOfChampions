import React, { useState, useEffect } from "react";
import PlayerService from "../Services/PlayerService";
import Player from "./Player";
import Team from "./Team";

const Players = (props) => {
	const [username, setUsername] = useState({ username: "" });
	const [players, setPlayers] = useState([]);
	const [toDelete, setToDelete] = useState({ username: "" });
	const [team, setTeam] = useState({ teamName: "" });
	const [updatePage, setUpdate] = useState(false);

	const onChange = (e) => {
		setUsername({ username: e.target.value });
	};

	const onChangeTeam = (e) => {
		setTeam({ teamName: e.target.value });
	};

	const storeToDelete = (e) => {
		setToDelete({ username: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		PlayerService.postPlayer(username, team).then(() => {
			PlayerService.getPlayers().then((data) => {
				setPlayers(data.players);
			});
		});

		resetForm();
	};

	const onDelete = (e) => {
		e.preventDefault();
		PlayerService.deletePlayer(username);
		PlayerService.getPlayers().then((data) => {
			setPlayers(data.players);
		});
		resetForm();
	};

	useEffect(() => {
		PlayerService.getPlayers().then((data) => {
			console.log(data.players);
			setPlayers(data.players);
		});
	}, []);

	const resetForm = () => {
		setUsername({ username: "" });
		setTeam({ teamName: "" });
	};

	return (
		<>
			<h1>List of members</h1>
			<ul>
				{players.map((username) => {
					return <Player key={username._id} username={username} />;
				})}
			</ul>
			<label>PSN Name</label>
			<input
				type="text"
				id="username"
				placeholder="Enter Username"
				value={username.username}
				onChange={onChange}
			/>
			<input
				type="text"
				id="teamName"
				placeholder="Enter Team"
				value={team.teamName}
				onChange={onChangeTeam}
			/>
			<button className="btn btn-lg btn-primary btn-block" onClick={onSubmit}>
				Add
			</button>
			<button className="btn btn-lg btn-primary btn-block" onClick={onDelete}>
				Delete
			</button>
		</>
	);
};

export default Players;
