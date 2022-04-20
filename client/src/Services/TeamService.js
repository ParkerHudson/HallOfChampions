export default {
	getTeams: () => {
		return fetch("/user/todos").then((response) => {
			if (response.status != 401) {
				return response.json().then((data) => data);
			} else {
				return { message: { msgBody: "UnAuthorized" }, msgError: true };
			}
		});
	},
	postTeam: (team) => {
		return fetch("/api/addTeam", {
			method: "post",
			body: JSON.stringify(team),
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
