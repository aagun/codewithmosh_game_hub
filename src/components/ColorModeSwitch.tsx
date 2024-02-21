import {ColorModeContextType, Switch, useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode }: ColorModeContextType = useColorMode();

	const toCapitalize = (str: string): string => str.charAt(0).toLocaleUpperCase() + str.slice(1);

	return (
		<Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}>
			{toCapitalize(colorMode)} Mode
		</Switch>
	);
};

export default ColorModeSwitch;
