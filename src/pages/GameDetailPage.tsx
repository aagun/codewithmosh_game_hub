import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.tsx";
import {Heading, Spinner} from "@chakra-ui/react";
import {UseQueryResult} from "@tanstack/react-query";
import {Game} from "../entities/Game.ts";
import ExpandableText from "../components/ExpandableText.tsx";

const GameDetailPage = () => {
	const {slug} = useParams();
	const {data, error, isLoading}: UseQueryResult<Game, Error> = useGame(slug!);

	if (isLoading) return <Spinner/>

	if (error || !data) throw new Error();

	return (
		<>
			<Heading>{data.name}</Heading>
			<ExpandableText>{data.description_raw}</ExpandableText>
		</>
	);
};

export default GameDetailPage;
