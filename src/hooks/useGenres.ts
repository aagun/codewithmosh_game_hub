import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient, {RAWGResponse} from "../services/api-client.ts";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const apiClient: APIClient<Genre> = new APIClient<Genre>("/genres");

const useGenres = (): UseQueryResult<RAWGResponse<Genre>, Error> => useQuery<RAWGResponse<Genre>, Error>({
	queryKey: ["genres"],
	queryFn: apiClient.getAll,
	staleTime: 24 * 60 * 60 * 1000,
});

export default useGenres;