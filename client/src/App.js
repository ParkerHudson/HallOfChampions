import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import Admin from "./Components/Admin";
import Players from "./Components/Players";
import Leaderboard from "./Components/Leaderboard";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path="login"
					element={
						<UnPrivateRoute>
							<Login />
						</UnPrivateRoute>
					}
				/>
				<Route
					path="register"
					element={
						<UnPrivateRoute>
							<Register />
						</UnPrivateRoute>
					}
				/>
				<Route
					path="/todos"
					element={
						<PrivateRoute>
							<Todos />
						</PrivateRoute>
					}
				/>
				<Route
					path="/admin"
					element={
						<PrivateRoute>
							<Admin />
						</PrivateRoute>
					}
				/>
				<Route path="/players" element={<Players />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
			</Routes>
		</Router>
	);
}

export default App;
