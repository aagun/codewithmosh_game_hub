import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {RAWGResponse} from "../components/GameGrid.tsx";
import {AxiosRequestConfig, AxiosResponse, CanceledError} from "axios";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
	metacritic: number;
}

export interface UseGames {
	games: Game[];
	error: string;
	isLoading: boolean;
}

const useGames = (): UseGames => {
	const controller: AbortController = new AbortController();
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const config: AxiosRequestConfig = {signal: controller.signal}

		setIsLoading(true);

		apiClient.get<RAWGResponse<Game>>("/games", config)
			.then((res: AxiosResponse<RAWGResponse<Game>>) => setGames(res.data.results))
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			})
			.finally((): void => setIsLoading(false));

		// return () => controller.abort();
	}, []);

	return {games, error, isLoading}
}

export default useGames;