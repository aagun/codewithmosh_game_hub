import useData, {UseDataProps} from "./useData.ts";
import {Platform} from "./usePlatforms.tsx";
import {GameQuery} from "../App.tsx";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (gameQuery: GameQuery): UseDataProps<Game> => useData<Game>(
	"/games",
	{
		params: {
			genres: gameQuery?.genre,
			parent_platforms: gameQuery?.platform
		}
	},
	[gameQuery]);

export default useGames;