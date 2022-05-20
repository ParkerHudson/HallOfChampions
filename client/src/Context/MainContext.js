import React, { createContext, useState, useEffect } from "react";
import GameService from "../Services/GameService";

export const MainContext = createContext();

const MainFunction = ({ children }) => {
	const [display, setDisplay] = useState("default");
	const [isLoaded, setIsLoaded] = useState(false);
	const [games, setGames] = useState([]);

	useEffect(() => {
		GameService.getGames().then((data) => {
			setGames(data.Games);
			setIsLoaded(true);
		});
	}, []);

	return (
		<div>
			{!isLoaded ? (
				<h1>Loading Game Info. . .</h1>
			) : (
				<MainContext.Provider
					value={{
						display,
						setDisplay,
						isLoaded,
						setIsLoaded,
						games,
						setGames,
					}}
				>
					{children}
				</MainContext.Provider>
			)}
		</div>
	);
};

export default MainFunction;
