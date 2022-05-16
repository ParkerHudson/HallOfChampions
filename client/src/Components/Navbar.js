import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
	const { isAuthenticated, user, setIsAuthenticated, setUser } =
		useContext(AuthContext);

	const onClickLogoutHandler = () => {
		AuthService.logout().then((data) => {
			if (data.success) {
				setUser(data.user);
				setIsAuthenticated(false);
			}
		});
	};

	const unauthenticatedNavBar = () => {
		return (
			<>
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>

				{/* <Link to="/">
					<li className="nav-item nav-link">Home</li>
				</Link> */}

				{/* <Link to="/register">
					<li className="nav-item nav-link">Register</li>
				</Link> */}
			</>
		);
	};
	const authenticatedNavBar = () => {
		return (
			<>
				{/* <Link to="/">
					<li className="nav-item nav-link">Home</li>
				</Link> */}
				{/* <Link to="/todos">
					<li className="nav-item nav-link">Todos</li>
				</Link> */}
				{user.role === "admin" ? (
					<li className="nav-item">
						<Link to="/admin" className="nav-link">
							Admin
						</Link>
					</li>
				) : null}
				<li classname="nav-item">
					<button
						type="button"
						className="btn btn-link nav-link"
						onClick={onClickLogoutHandler}
					>
						Logout
					</button>
				</li>
			</>
		);
	};

	/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/" style={{ textDecoration: "none" }}>
					<div className="navbar-brand">BENFL</div>
				</Link>
				<button
					className="navbar-toggler"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarColor02">
					<ul className="navbar-nav">
						{!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
					</ul>
				</div>
			</div>
		</nav> */
	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						BENFL
					</Link>
					<ul className="navbar-nav">
						{!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
