import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data: genres, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const setGenreId = useGameQueryStore((store) => store.setGenreId);
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
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                colorScheme="black"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
