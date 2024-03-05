export default interface RAWGResponse<T> {
	count: number;
	results: T[];
	next: string | null;
	previous: string | null;
}