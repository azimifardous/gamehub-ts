import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import UseGameDetails from "../hooks/useGameDetails";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGameDetails(slug!);

  if (isLoading) <Spinner />;
  if (error) throw new Error("No Game Found.");

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText children={game?.description_raw!} />
        <GameAttributes game={game!} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game?.id!} />
        <GameScreenshots gameId={game?.id!} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
