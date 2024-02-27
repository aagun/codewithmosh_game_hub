import {ReactNode} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import {UseDataProps} from "../hooks/useData.ts";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
	const {error, data: games, isLoading}: UseDataProps<Game> = useGames(gameQuery);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6];

	if (error) return <Text color="red.500">{error}</Text>;

	return (
		<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} p="10px">
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
	);
};

export default GameGrid;
