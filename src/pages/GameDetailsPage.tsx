import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import UseGameDetails from "../hooks/useGameDetails";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGameDetails(slug!);

  if (isLoading) <Spinner />;
  if (error) throw new Error("No Game Found.");

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText children={game?.description_raw!} />
      <GameAttributes game={game!} />
      <GameTrailer gameId={game?.id!} />
    </>
  );
};

export default GameDetailsPage;
