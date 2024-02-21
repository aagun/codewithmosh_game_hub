import useGenres, {Genre} from "../hooks/useGenres.ts";
import {ReactNode} from "react";

const GenreList = () => {
	const {data: genres} = useGenres();
	return (
		<ul>
			{genres.map((genre: Genre): ReactNode => <li key={genre.id}>{genre.name}</li>)}
		</ul>
	);
};

export default GenreList;
