import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isLoading)
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="15px">
            <GenreItemSkeleton />
          </ListItem>
        ))}
      </List>
    );

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="10px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              objectFit="cover"
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
