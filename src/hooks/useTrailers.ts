import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import {Trailer} from "../entities/Trailer.ts";
import {RAWGResponse} from "../entities/RAWGResponse.ts";

const useTrailers = (gameId: number): UseQueryResult<RAWGResponse<Trailer>, Error> => {
	const apiClient: APIClient<Trailer> = new APIClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery<RAWGResponse<Trailer>, Error>({
		queryKey: ["trailers", gameId],
		queryFn: apiClient.getAll
	})
}

export default  useTrailers;