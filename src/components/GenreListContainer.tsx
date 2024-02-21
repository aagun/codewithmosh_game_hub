import {Box} from "@chakra-ui/react";
import GenreList from "./GenreList.tsx";
import useGenres from "../hooks/useGenres.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

const GenreListContainer = () => {
	const skeletons: number[] = [1,2,3,4,5,6,7,8,9,10];
	const {data, isLoading} = useGenres();

	console.log({data, isLoading});

	return (
		<Box>
			{isLoading && <GenreListSkeleton skeletons={skeletons}/>}
			<GenreList genres={data}/>
		</Box>
	);
};

export default GenreListContainer;
