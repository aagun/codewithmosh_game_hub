import {ReactNode} from "react";
import {Text} from "@chakra-ui/react";
import useGames, {Game, UseGames} from "../hooks/useGames.ts";

export interface RAWGResponse<T> {
	count: number;
	results: T[];
	next: string;
	previous: string;
}

const GameGrid = () => {
	const {error, games}: UseGames = useGames();

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
