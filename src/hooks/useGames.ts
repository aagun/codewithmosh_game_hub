import {Platform} from "./usePlatforms.tsx";
import {InfiniteData, useInfiniteQuery, UseInfiniteQueryResult} from "@tanstack/react-query";
import {GameQuery} from "../App.tsx";
import APIClient, {RAWGResponse} from "../services/api-client.ts";
import ms from "ms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const apiClient: APIClient<Game> = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery): UseInfiniteQueryResult<InfiniteData<RAWGResponse<Game>, number>, Error> =>
	useInfiniteQuery<RAWGResponse<Game>, Error, InfiniteData<RAWGResponse<Game>, number>>({
		queryKey: ["games", gameQuery],
		queryFn: ({pageParam}) => apiClient.getAll({
			params: {
				genres: gameQuery?.genreId,
				parent_platforms: gameQuery?.platformId,
				ordering: gameQuery.sortOrder?.value,
				search: gameQuery.searchText,
				page: pageParam
			}
		}),
		initialPageParam: 1,
		getNextPageParam: (lastPage: RAWGResponse<Game>, allPages: RAWGResponse<Game>[],): number | undefined =>
			lastPage.next ? allPages.length + 1 : undefined,
		staleTime: ms("1d")
	});

export default useGames;