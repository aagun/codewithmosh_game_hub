import {Platform} from "./Platform.ts";

export interface Game {
	id: number;
	name: string;
	description_raw: string;
	slug: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}