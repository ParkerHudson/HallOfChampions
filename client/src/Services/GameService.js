export default {
	getGames: () => {
		return fetch("/api/getGames").then((response) => {
			return response.json().then((data) => data);
		});
	},

	addGame: (game) => {
		return fetch("/api/addGame", {
			method: "post",
			body: JSON.stringify(game),
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
