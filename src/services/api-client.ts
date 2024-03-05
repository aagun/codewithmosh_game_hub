import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {RAWGResponse} from "../entities/RAWGResponse.ts";

const axiosInstance: AxiosInstance =  axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "559f909cf1964d89b59fd1988dc93025"
	}
});

class APIClient<T> {
	private endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => axiosInstance.get<RAWGResponse<T>>(this.endpoint, config)
		.then((response: AxiosResponse<RAWGResponse<T>>) => response.data);

	get = (id: number | string) => axiosInstance.get<T>(this.endpoint + "/" + id)
		.then((response: AxiosResponse<T>) => response.data)
}

export default APIClient;