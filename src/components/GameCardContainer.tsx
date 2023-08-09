import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.01)",
        transition: "transform .15s ease-in",
      }}
      rounded={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
