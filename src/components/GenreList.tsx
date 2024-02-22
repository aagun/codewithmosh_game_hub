import {Genre} from "../hooks/useGenres.ts";
import {ReactNode} from "react";
import {Button, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImage from "../services/image-url.ts";

interface Props {
	genres: Genre[],
	selectedGenre: Genre | null;
	onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({genres, selectedGenre, onSelectedGenre}: Props) => {
	return (
		<List>
			{genres.map((genre: Genre): ReactNode =>
				<ListItem key={genre.id} py="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius="8px"
							src={getCroppedImage(genre.image_background)}/>
						<Button
							variant="link"
							fontSize="lg"
							fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
							onClick={() => onSelectedGenre(genre)}>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			)}
		</List>
	);
};

export default GenreList;
