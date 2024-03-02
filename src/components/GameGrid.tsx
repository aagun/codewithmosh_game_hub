import {Fragment, JSX, ReactNode, useEffect} from "react";
import {Box, Flex, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import {InfiniteData, UseInfiniteQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";
import {InViewHookResponse, useInView} from "react-intersection-observer";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props): JSX.Element => {
	const {ref, inView}: InViewHookResponse = useInView();
	const {
		error,
		data,
		isLoading,
		fetchNextPage,
		isFetchingNextPage
	}: UseInfiniteQueryResult<InfiniteData<RAWGResponse<Game>, number>, Error> = useGames(gameQuery);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6];
	useEffect((): void => {
		if (inView) {
			fetchNextPage().then();
		}
	}, [fetchNextPage, inView])


	if (error) return <Text color="red.500">{error.message}</Text>;

	return (
		<Box p="10px">
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
				{isLoading && skeletons.map((skeleton: number): ReactNode =>
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton/>
					</GameCardContainer>
				)}

				{
					data?.pages.map((page: RAWGResponse<Game>, index: number) =>
						<Fragment key={index}>
							{page?.results.map((game: Game): ReactNode =>
								<GameCardContainer key={game.id}>
									<GameCard game={game}/>
								</GameCardContainer>
							)}
						</Fragment>
					)
				}
			</SimpleGrid>

			<Flex
				ref={ref}
				width="100%"
				my={5}
				justifyContent="center">
				{isFetchingNextPage && <Spinner size="xl"/>}
			</Flex>
		</Box>
	);
};

export default GameGrid;
