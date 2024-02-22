import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreListContainer from "./components/GenreListContainer.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import {Platform} from "./hooks/usePlatforms.tsx";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
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
				<NavBar/>
			</GridItem>

			<Show above="lg">
				<GridItem area="aside" px={5}>
					<GenreListContainer
						selectedGenre={gameQuery.genre}
						onSelectedGenre={(genre: Genre): void => setGameQuery({...gameQuery, genre})}/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<PlatformSelector
					selectedPlatform={gameQuery.platform}
					onSelectedPlatform={(platform: Platform): void => setGameQuery({...gameQuery, platform})}/>
				<GameGrid gameQuery={gameQuery}/>
			</GridItem>

		</Grid>
	)
}

export default App
