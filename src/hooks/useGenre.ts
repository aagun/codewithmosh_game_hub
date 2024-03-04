import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";
import useGenres, {Genre} from "./useGenres.ts";

const useGenre = (id?: number): Genre | undefined => {
	const {data: genres}: UseQueryResult<RAWGResponse<Genre>> = useGenres();
	return genres?.results.find((genre: Genre): boolean => genre.id == id);
};

export default useGenre;
