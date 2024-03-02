import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";
import useGenres, {Genre} from "../hooks/useGenres.ts";
import {RAWGResponse} from "../services/api-client.ts";
import {UseQueryResult} from "@tanstack/react-query";
import usePlatforms, {Platform} from "../hooks/usePlatforms.tsx";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
	const {platformId, genreId}: GameQuery = gameQuery
	const {data: platforms}: UseQueryResult<RAWGResponse<Platform>> = usePlatforms();
	const {data: genres}: UseQueryResult<RAWGResponse<Genre>> = useGenres();
	const genre: Genre| undefined = genres?.results.find((g: Genre) => g.id == genreId);
	const platform: Platform| undefined = platforms?.results.find((platform: Platform) => platform.id == platformId);

	const name: string = `${platform?.name || ""} ${genre?.name || ""}`;
	return (
		<Heading as="h1" fontSize="5xl" my={5}>{name} Games</Heading>
	);
};

export default GameHeading;
