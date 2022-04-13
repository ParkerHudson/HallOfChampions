import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const UnPrivateRoute = ({ children }) => {
	const { isAuthenticated, user } = useContext(AuthContext);
	return isAuthenticated ? <Navigate to="/" /> : children;
};

export default UnPrivateRoute;
