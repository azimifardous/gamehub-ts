import { Grid, Show, GridItem, Wrap, WrapItem } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
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
};

export default HomePage;
