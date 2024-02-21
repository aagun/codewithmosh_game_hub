import {ReactNode} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game, UseGames} from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";

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
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} p="10px">
				{games.map((game: Game): ReactNode =>
					<GameCard key={game.id} game={game} />
				)}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
