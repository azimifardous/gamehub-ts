import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emoji =
    rating < 3 ? "" : rating === 3 ? "👍" : rating === 4 ? "🎯" : "😍";
  return (
    <Text fontSize="xl" marginTop={1}>
      {emoji}
    </Text>
  );
};

export default Emoji;
