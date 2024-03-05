import {JSX, ReactNode} from "react";
import {Image, SimpleGrid, Spinner} from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots.ts";
import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../entities/RAWGResponse.ts";
import {Screenshot} from "../entities/Screenshot.ts";

interface Props {
	gameId: number;
}

const GameScreenshots = ({gameId}: Props): JSX.Element => {
	const {data, error, isLoading}: UseQueryResult<RAWGResponse<Screenshot>, Error> = useScreenshots(gameId);

	if (isLoading) return <Spinner />

	if (error) throw error;

	return (
		<SimpleGrid columns={{base: 1, md: 2}} spacing={2} my={5}>
			{data?.results.map((screenshot: Screenshot): ReactNode =>
				<Image key={screenshot.id} src={screenshot.image} />
			)}
		</SimpleGrid>
	);
};

export default GameScreenshots;
