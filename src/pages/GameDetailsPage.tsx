import { useParams } from "react-router-dom";
import UseGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGameDetails(slug!);

  if (isLoading) <Spinner />;
  if (error) throw new Error("No Game Found.");

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
