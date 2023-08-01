import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} width="60px" />
    </HStack>
  );
};

export default GenreItemSkeleton;
