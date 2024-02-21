import useData, {UseDataProps} from "./useData.ts";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

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

const useGames = (): UseDataProps<Game> => useData<Game>("/games");

export default useGames;