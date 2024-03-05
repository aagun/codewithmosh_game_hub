import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa6";
import usePlatforms from "../hooks/usePlatforms.ts";
import {JSX, ReactNode} from "react";
import {UseQueryResult} from "@tanstack/react-query";
import useGameQueryStore, {GameQueryStore} from "../store.ts";
import Platform from "../entities/Platform.ts";
import RAWGResponse from "../entities/RAWGResponse.ts";

const PlatformSelector = (): JSX.Element => {
	const {error, data}: UseQueryResult<RAWGResponse<Platform>> = usePlatforms();
	const platforms: Platform[] = [...(data?.results || [])];

	const selectedPlatformId: number | undefined = useGameQueryStore((s: GameQueryStore) => s.gameQuery.platformId);
	const platform: Platform | undefined = platforms.find((platform: Platform): boolean => platform.id === selectedPlatformId);

	const setSelectedPlatformId = useGameQueryStore((s: GameQueryStore) => s.setPlatformId);

	if (error) return <></>;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<FaChevronDown/>}>
				{selectedPlatformId ? platform?.name : "Platforms"}
			</MenuButton>
			<MenuList>
				{platforms.map((platform: Platform): ReactNode =>
					<MenuItem key={platform.id || platform.name} onClick={() => setSelectedPlatformId(platform.id)}>
						{platform.name}
					</MenuItem>)}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector;
