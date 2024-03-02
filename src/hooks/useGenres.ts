import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient, {RAWGResponse} from "../services/api-client.ts";
import ms from "ms";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const apiClient: APIClient<Genre> = new APIClient<Genre>("/genres");

const useGenres = (): UseQueryResult<RAWGResponse<Genre>, Error> => useQuery<RAWGResponse<Genre>, Error>({
	queryKey: ["genres"],
	queryFn: apiClient.getAll,
	staleTime: ms("1d"),
});

export default useGenres;