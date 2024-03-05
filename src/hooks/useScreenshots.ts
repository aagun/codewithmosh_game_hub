import {useQuery, UseQueryResult} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import RAWGResponse from "../entities/RAWGResponse.ts";
import Screenshot from "../entities/Screenshot.ts";

const useScreenshots = (gameId: number): UseQueryResult<RAWGResponse<Screenshot>, Error> => {
	const apiClient: APIClient<Screenshot>
		= new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

	return useQuery<RAWGResponse<Screenshot>, Error>({
		queryKey: ["screenshots", gameId],
		queryFn: apiClient.getAll
	});
};

export default useScreenshots;
