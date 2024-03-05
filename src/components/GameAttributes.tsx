import DefinitionItem from "./DefinitionItem.tsx";
import {SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "./CriticScore.tsx";
import Genre from "../entities/Genre.ts";
import Publisher from "../entities/Publisher.ts";
import Game from "../entities/Game.ts";

interface Props {
	game: Game;
}

const GameAttributes = ({game}: Props) => {
	return (
		<SimpleGrid columns={2} as="dl">
			<DefinitionItem term="Platforms">
				{
					game.parent_platforms?.map(({platform}) =>
						<Text key={platform.id}>{platform.name}</Text>)
				}
			</DefinitionItem>

			<DefinitionItem term="Metascore">
				<CriticScore score={game.metacritic}/>
			</DefinitionItem>

			<DefinitionItem term="Genres">
				{
					game.genres?.map((genre: Genre) =>
						<Text key={genre.id}>{genre.name}</Text>)
				}
			</DefinitionItem>

			<DefinitionItem term="Publisher">
				{
					game.publishers?.map((publisher: Publisher) => {
						return <Text key={publisher.id}>{publisher.name}</Text>;
					})
				}
			</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;
