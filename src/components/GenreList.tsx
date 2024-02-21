import useGenres, {Genre, UseGenre} from "../hooks/useGenres.ts";
import {ReactNode} from "react";

const GenreList = () => {
	const {genres}: UseGenre = useGenres();
	return (
		<ul>
			{genres.map((genre: Genre): ReactNode => <li key={genre.id}>{genre.name}</li>)}
		</ul>
	);
};

export default GenreList;
