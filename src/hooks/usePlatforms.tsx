import useData, {UseDataProps} from "./useData.ts";

export interface Platform {
	id?: number;
	name: string;
	slug: string;
}

const usePlatforms = (): UseDataProps<Platform> => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
