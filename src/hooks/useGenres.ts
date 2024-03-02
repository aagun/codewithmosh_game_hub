import {RAWGResponse} from "./useData.ts";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {AxiosResponse} from "axios";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = (): UseQueryResult<RAWGResponse<Genre>, Error> => useQuery<RAWGResponse<Genre>, Error>({
	queryKey: ["genres"],
	queryFn: () => apiClient.get<RAWGResponse<Genre>>("/genres")
		.then((res: AxiosResponse<RAWGResponse<Genre>>) => res.data),
	staleTime: 24 * 60 * 60 * 1000,
});

export default useGenres;