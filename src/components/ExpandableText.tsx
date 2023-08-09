import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const CHAR_LIMIT = 400;

  if (!children) return null;

  if (children.length <= CHAR_LIMIT)
    return <Text textAlign="justify">{children}</Text>;

  const summary = expanded
    ? children
    : children.substring(0, CHAR_LIMIT) + "...";

  return (
    <Text textAlign="justify">
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
