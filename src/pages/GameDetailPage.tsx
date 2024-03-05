import {Params, useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import {UseQueryResult} from "@tanstack/react-query";
import {Game} from "../entities/Game.ts";
import ExpandableText from "../components/ExpandableText.tsx";
import {JSX} from "react";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailPage = (): JSX.Element => {
	const {slug}: Params = useParams();
	const {data: game, error, isLoading}: UseQueryResult<Game, Error> = useGame(slug!);

	if (isLoading) return <Spinner/>

	if (error || !game) throw new Error();

	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id} />
			<GameScreenshots gameId={game.id} />
		</>
	);
};

export default GameDetailPage;
