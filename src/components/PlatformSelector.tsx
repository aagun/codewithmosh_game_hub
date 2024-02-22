import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa6";
import usePlatforms, {Platform} from "../hooks/usePlatforms.tsx";
import {ReactNode} from "react";

interface Props {
	selectedPlatform: Platform | null;
	onSelectedPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({onSelectedPlatform, selectedPlatform}: Props) => {
	const {error, data: platforms} = usePlatforms();

	if (error) return <></>;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<FaChevronDown/>}>
				{selectedPlatform ? selectedPlatform?.name: "Platforms"}
			</MenuButton>
			<MenuList>
				{platforms.map((platform: Platform): ReactNode =>
					<MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>
						{platform.name}
					</MenuItem>)}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector;
