import React, { useState, useEffect } from "react";
import PlayerService from "../Services/PlayerService";
import Player from "./Player";

const Players = (props) => {
	const [username, setUsername] = useState({ username: "" });
	const [players, setPlayers] = useState([]);
	const [toDelete, setToDelete] = useState({ username: "" });
	const [updatePage, setUpdate] = useState(false);

	const onChange = (e) => {
		setUsername({ username: e.target.value });
	};

	const storeToDelete = (e) => {
		setToDelete({ username: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(username);
		PlayerService.postPlayer(username);
		PlayerService.getPlayers().then((data) => {
			setPlayers(data.players);
		});
		console.log(players);
	};

	const onDelete = (e) => {
		e.preventDefault();
		console.log(toDelete);
		PlayerService.deletePlayer(toDelete);
		PlayerService.getPlayers().then((data) => {
			setPlayers(data.players);
		});
	};

	useEffect(() => {
		PlayerService.getPlayers().then((data) => {
			console.log(data.players);
			setPlayers(data.players);
		});
	}, []);

	const resetForm = () => {
		setUsername({ username: "" });
	};

	return (
		<>
			<h1>List of members</h1>
			<ul>
				{players.map((username) => {
					return <Player key={username._id} username={username} />;
				})}
			</ul>
			<label>Add Player</label>
			<input type="text" onChange={onChange} />
			<button className="btn btn-lg btn-primary btn-block" onClick={onSubmit}>
				Add
			</button>
			<label>Remove Player</label>
			<input type="text" onChange={storeToDelete} />
			<button className="btn btn-lg btn-primary btn-block" onClick={onDelete}>
				Delete
			</button>
		</>
	);
};

export default Players;
