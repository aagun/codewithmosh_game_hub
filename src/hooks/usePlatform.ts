import usePlatforms from "./usePlatforms.ts";
import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";
import {Platform} from "../entities/Platform.ts";

const usePlatform = (id?: number): Platform | undefined => {
	const {data: platforms}: UseQueryResult<RAWGResponse<Platform>> = usePlatforms();
	return platforms?.results.find((platform: Platform): boolean => platform.id == id);
};

export default usePlatform;
