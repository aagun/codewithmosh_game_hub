import {Genre} from "../hooks/useGenres.ts";
import {ReactNode} from "react";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImage from "../services/image-url.ts";

interface Props {
	genres: Genre[]
}

const GenreList = ({genres}: Props) => {
	return (
		<List>
			{genres.map((genre: Genre): ReactNode =>
				<ListItem key={genre.id} py="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius="8px"
							src={getCroppedImage(genre.image_background)}/>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			)}
		</List>
	);
};

export default GenreList;
