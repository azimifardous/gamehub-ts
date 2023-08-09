import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import UseGameDetails from "../hooks/useGameDetails";
import ExpandableText from "../components/ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGameDetails(slug!);

  if (isLoading) <Spinner />;
  if (error) throw new Error("No Game Found.");

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText children={game?.description_raw!} />
    </>
  );
};

export default GameDetailsPage;
