import {ReactNode, useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {Text} from "@chakra-ui/react";

interface Game {
	id: number;
	name: string;
}

interface RAWGResponse<T> {
	count: number;
	results: T[];
	next: string;
	previous: string;
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		apiClient.get<RAWGResponse<Game>>("/games")
			.then((res) => setGames(res.data.results))
			.catch(err => setError(err.message));
	}, []);

	return (
		<>
			{error && <Text color="red.500">{error}</Text>}
			<ul>
				{games.map((game: Game): ReactNode => <li key={game.id}>{game.name}</li>)}
			</ul>
		</>
	);
};

export default GameGrid;
