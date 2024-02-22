import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa6";
import usePlatforms, {Platform} from "../hooks/usePlatforms.tsx";
import {ReactNode} from "react";

const PlatformSelector = () => {
	const {error, data: platforms} = usePlatforms();

	if (error) return <></>;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<FaChevronDown/>}>
				Platforms
			</MenuButton>
			<MenuList>
				{platforms.map((platform: Platform): ReactNode => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector;
