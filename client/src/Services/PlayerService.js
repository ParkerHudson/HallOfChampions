export default {
	getPlayers: () => {
		return fetch("/api/getPlayers").then((response) => {
			if (response.status != 401) {
				return response.json().then((data) => data);
			} else {
				return { message: { msgBody: "UnAuthorized" }, msgError: true };
			}
		});
	},
	postPlayer: (player) => {
		return fetch("/api/addPlayer", {
			method: "post",
			body: JSON.stringify(player),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			if (response.status != 401) {
				return response.json().then((data) => data);
			} else {
				return { message: { msgBody: "Unauthorized" }, msgError: true };
			}
		});
	},
	deletePlayer: (player) => {
		return fetch("/api/deletePlayer", {
			method: "delete",
			body: JSON.stringify(player),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			if (response.status != 401) {
				return response.json().then((data) => data);
			} else {
				return { message: { msgBody: "Unauthorized" }, msgError: true };
			}
		});
	},
};
