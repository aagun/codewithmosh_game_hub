import {ReactNode} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";
import {Platform} from "../hooks/usePlatforms.tsx";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
	const {error, data: games, isLoading}
		= useGames({
		selectedGenre,
		selectedPlatform
	});
	const skeletons: number[] = [1, 2, 3, 4, 5, 6];

	console.log({selectedPlatform});

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
