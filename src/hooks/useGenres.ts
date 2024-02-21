import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {RAWGResponse} from "../components/GameGrid.tsx";
import {AxiosRequestConfig, AxiosResponse, CanceledError} from "axios";

export interface Genre {
	id: number;
	name: string;
}

export interface UseGenre {
	genres: Genre[];
	error: string;
	isLoading: boolean;
}

const useGenres = (): UseGenre => {
	const controller: AbortController = new AbortController();
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const config: AxiosRequestConfig = {signal: controller.signal}

		setIsLoading(true);

		apiClient.get<RAWGResponse<Genre>>("/genres", config)
			.then((res: AxiosResponse<RAWGResponse<Genre>>) => setGenres(res.data.results))
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			})
			.finally((): void => setIsLoading(false));

		// return () => controller.abort();
	}, []);

	return {genres, error, isLoading}
}

export default useGenres;