import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreListContainer from "./components/GenreListContainer.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
						selectedGenre={selectedGenre}
						onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<PlatformSelector />
				<GameGrid selectedGenre={selectedGenre}/>
			</GridItem>

		</Grid>
	)
}

export default App
