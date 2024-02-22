import {Box} from "@chakra-ui/react";
import GenreList from "./GenreList.tsx";
import useGenres, {Genre} from "../hooks/useGenres.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

interface Props {
	onSelectedGenre: (genres: Genre) => void;
}
const GenreListContainer = ({onSelectedGenre}: Props) => {
	const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const {error, data, isLoading} = useGenres();

	if (error) return <Box/>

	return (
		<Box>
			{isLoading
				? <GenreListSkeleton skeletons={skeletons}/>
				: <GenreList genres={data} onSelectedGenre={onSelectedGenre}/>
			}
		</Box>
	);
};

export default GenreListContainer;
