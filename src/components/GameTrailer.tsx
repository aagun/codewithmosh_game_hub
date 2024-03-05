import useTrailers from "../hooks/useTrailers.ts";
import {UseQueryResult} from "@tanstack/react-query";
import RAWGResponse from "../entities/RAWGResponse.ts";
import Trailer from "../entities/Trailer.ts";
import {Spinner} from "@chakra-ui/react";
import {JSX} from "react";

interface Props {
	gameId: number;
}

const GameTrailer = ({gameId}: Props): JSX.Element => {
	const {data, error, isLoading}: UseQueryResult<RAWGResponse<Trailer>, Error> = useTrailers(gameId);

	if (isLoading) return <Spinner/>;

	if (error) throw error;

	if (!data) return <></>

	const {preview, data: videos}: Trailer = data.results[0];

	return (
		<video
			src={videos["480"]}
			poster={preview}
			controls
		/>
	);
};

export default GameTrailer;
