import {Platform} from "./usePlatforms.tsx";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {GameQuery} from "../App.tsx";
import APIClient, {RAWGResponse} from "../services/api-client.ts";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const apiClient: APIClient<Game> = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery): UseQueryResult<RAWGResponse<Game>, Error> => useQuery<RAWGResponse<Game>, Error>({
	queryKey: ["games", gameQuery],
	queryFn: () => apiClient.getAll({
		params: {
			genres: gameQuery?.genre,
			parent_platforms: gameQuery?.platform,
			ordering: gameQuery.sortOrder?.value,
			search: gameQuery.searchText
		}
	})
});

export default useGames;