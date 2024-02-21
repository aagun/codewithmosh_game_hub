import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {RAWGResponse} from "../components/GameGrid.tsx";
import {AxiosRequestConfig, AxiosResponse, CanceledError} from "axios";

export interface Game {
	id: number;
	name: string;
	background_image: string;
}

export interface UseGames {
	games: Game[];
	error: string
}

const useGames = (): UseGames => {
	const controller: AbortController = new AbortController();
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const config: AxiosRequestConfig = {signal: controller.signal}

		apiClient.get<RAWGResponse<Game>>("/games", config)
			.then((res: AxiosResponse<RAWGResponse<Game>>) => setGames(res.data.results))
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return {games, error}
}

export default useGames;