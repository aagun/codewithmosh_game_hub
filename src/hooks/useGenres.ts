import useData, {UseDataProps} from "./useData.ts";

export interface Genre {
	id: number;
	name: string;
}

const useGenres = (): UseDataProps<Genre> => useData("/genres");

export default useGenres;