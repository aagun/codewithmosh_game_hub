import {RAWGResponse} from "./useData.ts";
import {Platform} from "./usePlatforms.tsx";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {GameQuery} from "../App.tsx";
import {AxiosResponse} from "axios";
import apiClient from "../services/api-client.ts";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (gameQuery: GameQuery): UseQueryResult<RAWGResponse<Game>, Error> => useQuery<RAWGResponse<Game>, Error>({
	queryKey: ["games", gameQuery],
	queryFn: () => apiClient.get<RAWGResponse<Game>>("/games", {
		params: {
			genres: gameQuery?.genre,
			parent_platforms: gameQuery?.platform,
			ordering: gameQuery.sortOrder?.value,
			search: gameQuery.searchText
		}
	})
		.then((res: AxiosResponse<RAWGResponse<Game>>) => res.data)
});

export default useGames;