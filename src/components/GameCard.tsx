import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGames.ts";
import {Platform} from "../hooks/usePlatforms.tsx";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImage from "../services/image-url.ts";

interface Props {
	game: Game;
}

const GameCard = ({game}: Props) => {
	const image: string = getCroppedImage(game.background_image);

	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={image}/>
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList platforms={game.parent_platforms.map((p: { platform: Platform }): Platform => p.platform)}/>
					<CriticScore score={game.metacritic}/>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
