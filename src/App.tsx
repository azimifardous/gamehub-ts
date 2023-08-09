import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Grid, GridItem, Show, Wrap, WrapItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="30px">
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={"main"} paddingX="30px">
        <GameHeading />
        <Wrap spacing={5} marginBottom={5}>
          <WrapItem>
            <PlatformSelector />
          </WrapItem>
          <WrapItem>
            <SortSelector />
          </WrapItem>
        </Wrap>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
