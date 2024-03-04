import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient, {RAWGResponse} from "../services/api-client.ts";
import ms from "ms";
import {Genre} from "../entities/Genre.ts";

const apiClient: APIClient<Genre> = new APIClient<Genre>("/genres");

const useGenres = (): UseQueryResult<RAWGResponse<Genre>, Error> => useQuery<RAWGResponse<Genre>, Error>({
	queryKey: ["genres"],
	queryFn: apiClient.getAll,
	staleTime: ms("1d"),
});

export default useGenres;