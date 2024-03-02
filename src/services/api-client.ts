import axios from "axios";

export interface RAWGResponse<T> {
	count: number;
	results: T[];
	next: string;
	previous: string;
}

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "559f909cf1964d89b59fd1988dc93025"
	}
})