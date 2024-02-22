import useData, {UseDataProps} from "./useData.ts";
import {Genre} from "./useGenres.ts";
import {Platform} from "./usePlatforms.tsx";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface UseGames {
	games: Game[];
	error: string;
	isLoading: boolean;
}

const useGames = (selectedGenre: Genre | null): UseDataProps<Game> => useData<Game>(
	"/games",
	{params: {genres: selectedGenre?.id}},
		[selectedGenre?.id]);

export default useGames;