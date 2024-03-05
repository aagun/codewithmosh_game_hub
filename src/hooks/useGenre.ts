import {UseQueryResult} from "@tanstack/react-query";
import useGenres from "./useGenres.ts";
import Genre from "../entities/Genre.ts";
import RAWGResponse from "../entities/RAWGResponse.ts";

const useGenre = (id?: number): Genre | undefined => {
	const {data: genres}: UseQueryResult<RAWGResponse<Genre>> = useGenres();
	return genres?.results.find((genre: Genre): boolean => genre.id == id);
};

export default useGenre;
