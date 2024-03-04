import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreListContainer from "./components/GenreListContainer.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {JSX} from "react";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

function App(): JSX.Element {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr"
			}}>

			<GridItem area="nav">
				<NavBar/>
			</GridItem>

			<Show above="lg">
				<GridItem area="aside" px={5}>
					<GenreListContainer/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<Box pl={2}>
					<GameHeading/>
					<HStack mb={5}>
						<PlatformSelector/>
						<SortSelector/>
					</HStack>
				</Box>
				<GameGrid/>
			</GridItem>

		</Grid>
	)
}

export default App
