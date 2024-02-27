import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
	const {platform, genre}: GameQuery = gameQuery
	const name: string = `${platform?.name || ""} ${genre?.name || ""}`;
	return (
		<Heading as="h1" fontSize="5xl" my={5}>{name} Games</Heading>
	);
};

export default GameHeading;
