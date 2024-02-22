import {ReactNode} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre}: Props) => {
	const {error, data: games, isLoading} = useGames(selectedGenre);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text color="red.500">{error}</Text>}
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} p="10px">
				{isLoading && skeletons.map((skeleton: number): ReactNode =>
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton/>
					</GameCardContainer>
				)}

				{games.map((game: Game): ReactNode =>
					<GameCardContainer key={game.id}>
						<GameCard game={game}/>
					</GameCardContainer>
				)}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
