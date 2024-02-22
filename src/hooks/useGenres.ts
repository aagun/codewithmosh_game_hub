import useData, {UseDataProps} from "./useData.ts";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = (): UseDataProps<Genre> => useData<Genre>("/genres");

export default useGenres;