import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./Context/AuthContext";
import MainContext from "./Context/MainContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/slate/bootstrap.min.css";

ReactDOM.render(
	<AuthProvider>
		<MainContext>
			<App />
		</MainContext>
	</AuthProvider>,
	document.getElementById("root")
);
