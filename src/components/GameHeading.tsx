import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform.ts";
import useGenre from "../hooks/useGenre.ts";
import useGameQueryStore, {GameQueryStore} from "../store.ts";
import Platform from "../entities/Platform.ts";
import Genre from "../entities/Genre.ts";

const GameHeading = () => {
	const selectedGenreId: number | undefined = useGameQueryStore((s: GameQueryStore) => s.gameQuery.genreId);
	const genre: Genre | undefined = useGenre(selectedGenreId);

	const selectedPlatformId: number | undefined = useGameQueryStore((s: GameQueryStore) => s.gameQuery.platformId)
	const platform: Platform | undefined = usePlatform(selectedPlatformId);

	const name: string = `${platform?.name || ""} ${genre?.name || ""}`;
	return (
		<Heading as="h1" fontSize="5xl" my={5}>{name} Games</Heading>
	);
};

export default GameHeading;
