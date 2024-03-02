import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export interface RAWGResponse<T> {
	count: number;
	results: T[];
	next: string | null;
	previous: string | null;
}

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
}

export default APIClient;