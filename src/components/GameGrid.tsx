import {JSX, ReactNode} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props): JSX.Element => {
	const {error, data: games, isLoading}: UseQueryResult<RAWGResponse<Game>, Error> = useGames(gameQuery);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6];

	if (error) return <Text color="red.500">{error.message}</Text>;

	return (
		<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} p="10px">
			{isLoading && skeletons.map((skeleton: number): ReactNode =>
				<GameCardContainer key={skeleton}>
					<GameCardSkeleton/>
				</GameCardContainer>
			)}

			{games?.results.map((game: Game): ReactNode =>
				<GameCardContainer key={game.id}>
					<GameCard game={game}/>
				</GameCardContainer>
			)}
		</SimpleGrid>
	);
};

export default GameGrid;
