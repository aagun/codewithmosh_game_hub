import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import ms from "ms";
import Platform from "../entities/Platform.ts";
import RAWGResponse from "../entities/RAWGResponse.ts";

const apiClient: APIClient<Platform> = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = (): UseQueryResult<RAWGResponse<Platform>, Error> => useQuery<RAWGResponse<Platform>, Error>({
	queryKey: ["platforms"],
	queryFn: apiClient.getAll,
	staleTime: ms("1d")
});

export default usePlatforms;
