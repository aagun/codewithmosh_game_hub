import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";
import useGenres from "./useGenres.ts";
import {Genre} from "../entities/Genre.ts";

const useGenre = (id?: number): Genre | undefined => {
	const {data: genres}: UseQueryResult<RAWGResponse<Genre>> = useGenres();
	return genres?.results.find((genre: Genre): boolean => genre.id == id);
};

export default useGenre;
