import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreListContainer from "./components/GenreListContainer.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {JSX, useState} from "react";
import {Platform} from "./hooks/usePlatforms.tsx";
import SortSelector, {SortOrder} from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";
import {Genre} from "./hooks/useGenres.ts";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: SortOrder | null;
	searchText: string | null;
}

function App(): JSX.Element {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
				<NavBar onSearch={(searchText: string): void => setGameQuery({...gameQuery, searchText})}/>
			</GridItem>

			<Show above="lg">
				<GridItem area="aside" px={5}>
					<GenreListContainer
						selectedGenreId={gameQuery.genreId}
						onSelectedGenre={(genre: Genre): void => setGameQuery({...gameQuery, genreId: genre.id})}/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<Box pl={2}>
					<GameHeading gameQuery={gameQuery}/>
					<HStack mb={5}>
						<PlatformSelector
							selectedPlatformId={gameQuery.platformId}
							onSelectedPlatform={(platform: Platform): void => setGameQuery({...gameQuery, platformId: platform.id})}/>
						<SortSelector
							selectedSortOrder={gameQuery.sortOrder}
							onSelectedSortOrder={(sortOrder: SortOrder): void => setGameQuery({...gameQuery, sortOrder})}/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery}/>
			</GridItem>

		</Grid>
	)
}

export default App
