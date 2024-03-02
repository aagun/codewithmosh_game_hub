import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import apiClient, {RAWGResponse} from "../services/api-client.ts";

export interface Platform {
	id?: number;
	name: string;
	slug: string;
}

const usePlatforms = (): UseQueryResult<RAWGResponse<Platform>, Error> => useQuery<RAWGResponse<Platform>, Error>({
	queryKey: ["platforms"],
	queryFn: () => apiClient.get<RAWGResponse<Platform>>("/platforms/lists/parents")
		.then((res: AxiosResponse<RAWGResponse<Platform>>) => res.data),
	staleTime: 24 * 60 * 60 * 1000
});

export default usePlatforms;
