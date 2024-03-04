import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import GenreListContainer from "../components/GenreListContainer.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr"
			}}>

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
	);
};

export default HomePage;
