import ms from "ms";
import {InfiniteData, useInfiniteQuery, UseInfiniteQueryResult} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import useGameQueryStore, {GameQuery, GameQueryStore} from "../store.ts";
import Game from "../entities/Game.ts";
import RAWGResponse from "../entities/RAWGResponse.ts";

const apiClient: APIClient<Game> = new APIClient<Game>("/games");

const useGames = (): UseInfiniteQueryResult<InfiniteData<RAWGResponse<Game>, number>, Error> => {
	const gameQuery: GameQuery = useGameQueryStore((s: GameQueryStore) => s.gameQuery);

	return useInfiniteQuery<RAWGResponse<Game>, Error, InfiniteData<RAWGResponse<Game>, number>>({
		queryKey: ["games", gameQuery],
		queryFn: ({pageParam}) => apiClient.getAll({
			params: {
				genres: gameQuery?.genreId,
				parent_platforms: gameQuery?.platformId,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
				page: pageParam
			}
		}),
		initialPageParam: 1,
		getNextPageParam: (lastPage: RAWGResponse<Game>, allPages: RAWGResponse<Game>[],): number | undefined =>
			lastPage.next ? allPages.length + 1 : undefined,
		staleTime: ms("1d")
	});
}

export default useGames;