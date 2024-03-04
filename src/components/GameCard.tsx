import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGames.ts";
import {Platform} from "../hooks/usePlatforms.ts";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImage from "../services/image-url.ts";
import {Link} from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({game}: Props) => {
	const image: string = getCroppedImage(game.background_image);

	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={image}/>
			<CardBody>
				<HStack justifyContent="space-between" mb={3}>
					<PlatformIconList platforms={game.parent_platforms.map((p: { platform: Platform }): Platform => p.platform)}/>
					<CriticScore score={game.metacritic}/>
				</HStack>
				<Heading fontSize="2xl">
					<Link to={"/games/" + game.slug}>{game.name}</Link>
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
