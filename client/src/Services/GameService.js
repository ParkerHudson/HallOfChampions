export default {
	getGames: () => {
		return fetch("/api/getGames").then(() => {
			if (response.status != 401) {
				return response.json().then((data) => data);
			} else {
				return { message: { msgBody: "UnAuthorized" }, msgError: true };
			}
		});
	},

	addGame: (game) => {
		return fetch("/api/addGame", {
			method: "post",
			body: JSON.stringify(game),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			if (response.status != 401) {
				return response.json().then((data) => data);
			} else {
				return { message: { msgBody: "Unauthorized" }, msgError: true };
			}
		});
	},
};
