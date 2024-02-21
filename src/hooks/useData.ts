import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, AxiosResponse, CanceledError} from "axios";

export interface UseDataProps<T> {
	data: T[];
	error: string;
	isLoading: boolean;
}

export interface RAWGResponse<T> {
	count: number;
	results: T[];
	next: string;
	previous: string;
}

const useData = <T>(url: string): UseDataProps<T> => {
	const controller: AbortController = new AbortController();
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const config: AxiosRequestConfig = {signal: controller.signal}

		setIsLoading(true);

		apiClient.get<RAWGResponse<T>>(url, config)
			.then((res: AxiosResponse<RAWGResponse<T>>) => setData(res.data.results))
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			})
			.finally((): void => setIsLoading(false));

		// return () => controller.abort();
	}, []);

	return {data, error, isLoading}
}

export default useData;