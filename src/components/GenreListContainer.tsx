import {Box} from "@chakra-ui/react";
import GenreList from "./GenreList.tsx";
import useGenres, {Genre} from "../hooks/useGenres.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";
import {JSX} from "react";
import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";

interface Props {
	onSelectedGenre: (genres: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreListContainer = ({selectedGenre, onSelectedGenre}: Props): JSX.Element => {
	const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const {error, data, isLoading}: UseQueryResult<RAWGResponse<Genre>> = useGenres();

	if (error) return <Box/>

	return (
		<Box>
			{isLoading
				? <GenreListSkeleton skeletons={skeletons}/>
				: <GenreList
					genres={data?.results || []}
					selectedGenre={selectedGenre}
					onSelectedGenre={onSelectedGenre}/>
			}
		</Box>
	);
};

export default GenreListContainer;
