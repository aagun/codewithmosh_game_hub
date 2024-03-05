import Platform from "./Platform.ts";
import Genre from "./Genre.ts";
import Publisher from "././Publisher.ts";

export default interface Game {
	id: number;
	name: string;
	description_raw: string;
	genres: Genre[];
	publishers: Publisher[];
	slug: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}