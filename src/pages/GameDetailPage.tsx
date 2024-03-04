import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.tsx";
import {Heading, Spinner, Text} from "@chakra-ui/react";
import {UseQueryResult} from "@tanstack/react-query";
import {Game} from "../hooks/useGames.ts";

const GameDetailPage = () => {
	const {slug} = useParams();
	const {data, error, isLoading}: UseQueryResult<Game, Error> = useGame(slug!);

	if (isLoading) return <Spinner />

	if (error || !data) throw new Error();

	return (
		<>
			<Heading>{data.name}</Heading>
			<Text>{data.description_raw}</Text>
		</>
	);
};

export default GameDetailPage;
