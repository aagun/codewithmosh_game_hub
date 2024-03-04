import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient, {RAWGResponse} from "../services/api-client.ts";
import ms from "ms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const apiClient: APIClient<Platform> = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = (): UseQueryResult<RAWGResponse<Platform>, Error> => useQuery<RAWGResponse<Platform>, Error>({
	queryKey: ["platforms"],
	queryFn: apiClient.getAll,
	staleTime: ms("1d")
});

export default usePlatforms;