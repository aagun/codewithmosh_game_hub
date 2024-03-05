import {Box} from "@chakra-ui/react";
import GenreList from "./GenreList.tsx";
import useGenres from "../hooks/useGenres.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";
import {JSX} from "react";
import {UseQueryResult} from "@tanstack/react-query";
import {Genre} from "../entities/Genre.ts";
import {RAWGResponse} from "../entities/RAWGResponse.ts";

const GenreListContainer = (): JSX.Element => {
	const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const {error, data, isLoading}: UseQueryResult<RAWGResponse<Genre>> = useGenres();

	if (error) return <Box/>

	return (
		<Box>
			{isLoading
				? <GenreListSkeleton skeletons={skeletons}/>
				: <GenreList genres={data?.results || []}/>
			}
		</Box>
	);
};

export default GenreListContainer;
