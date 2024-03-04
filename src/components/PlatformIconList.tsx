import {HStack, Icon} from "@chakra-ui/react";
import {Platform} from "../hooks/usePlatforms.ts";
import {ReactNode} from "react";
import {IconType} from "react-icons";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaGlobe} from "react-icons/fa6";
import { MdOutlinePhoneIphone, MdOutlineAndroid } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
	const iconMap: {[key: string]: IconType} = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: BsNintendoSwitch,
		mac: FaApple,
		linux: FaLinux,
		android: MdOutlineAndroid,
		ios: MdOutlinePhoneIphone,
		web: FaGlobe
	}

	return (
		<HStack marginY="10px">
			{platforms.map((platform: Platform): ReactNode =>
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>
			)}
		</HStack>
	);
};

export default PlatformIconList;
