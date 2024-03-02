import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";
import {Genre} from "../hooks/useGenres.ts";
import {Platform} from "../hooks/usePlatforms.tsx";
import usePlatform from "../hooks/usePlatform.tsx";
import useGenre from "../hooks/useGenre.tsx";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
	const {platformId, genreId}: GameQuery = gameQuery
	const genre: Genre | undefined = useGenre(genreId);
	const platform: Platform | undefined = usePlatform(platformId);

	const name: string = `${platform?.name || ""} ${genre?.name || ""}`;
	return (
		<Heading as="h1" fontSize="5xl" my={5}>{name} Games</Heading>
	);
};

export default GameHeading;
