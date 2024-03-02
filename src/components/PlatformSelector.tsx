import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa6";
import usePlatforms, {Platform} from "../hooks/usePlatforms.tsx";
import {ReactNode} from "react";
import {UseQueryResult} from "@tanstack/react-query";
import {RAWGResponse} from "../services/api-client.ts";

interface Props {
	selectedPlatformId?: number;
	onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectedPlatform, selectedPlatformId}: Props) => {
	const {error, data}: UseQueryResult<RAWGResponse<Platform>> = usePlatforms();
	const platforms: Platform[] = [{name: "All Platforms", slug: ""}, ...(data?.results || [])];
	const platform: Platform | undefined = platforms.find((platform: Platform) => platform.id === selectedPlatformId);

	if (error) return <></>;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<FaChevronDown/>}>
				{selectedPlatformId ? platform?.name : "Platforms"}
			</MenuButton>
			<MenuList>
				{platforms.map((platform: Platform): ReactNode =>
					<MenuItem key={platform.id || platform.name} onClick={() => onSelectedPlatform(platform)}>
						{platform.name}
					</MenuItem>)}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector;
