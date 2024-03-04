import {Genre} from "../hooks/useGenres.ts";
import {ReactNode} from "react";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImage from "../services/image-url.ts";
import useGameQueryStore, {GameQueryStore} from "../store.ts";

interface Props {
	genres: Genre[];
}

const GenreList = ({genres}: Props) => {
	const selectedGenreId: number | undefined = useGameQueryStore((s: GameQueryStore): number | undefined => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s: GameQueryStore) => s.setGenreId);


	return (
		<>
			<Heading fontSize="2xl" mb={3}>Genres</Heading>
			<List>
				{genres.map((genre: Genre): ReactNode =>
					<ListItem key={genre.id} py="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius="8px"
								src={getCroppedImage(genre.image_background)}/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								objectFit="cover"
								variant="link"
								fontSize="lg"
								fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
								onClick={() => setSelectedGenreId(genre.id)}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				)}
			</List>
		</>
	);
};

export default GenreList;
