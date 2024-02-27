import {ColorModeContextType, HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const {colorMode, toggleColorMode}: ColorModeContextType = useColorMode();

	const toCapitalize = (str: string): string => str.charAt(0).toLocaleUpperCase() + str.slice(1);

	return (
		<HStack>
			<Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
			<Text whiteSpace="nowrap">{toCapitalize(colorMode)} Mode</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
