import React from "react";
import { CharacterDetailResponse } from "../types";
import { useQuery } from "@tanstack/react-query";
import { listComicCharacters } from "../api";
import {
  Skeleton,
  Text,
  UnorderedList,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import CharacterItem from "../components/CharacterItem";
const ComicCharacters = () => {
  const { comicId } = useParams();
  const { isLoading, data } = useQuery<CharacterDetailResponse>(
    ["comics", comicId],
    listComicCharacters
  );
  const resultDatas = data?.data.results;

  return (
    <Skeleton isLoaded={!isLoading}>
      <VStack alignItems={"center"}>
        <Text fontSize={"4xl"} fontWeight={"extrabold"}>
          Characters
        </Text>
        <Button as={Link} to={`/comics/${comicId}`}>
          Back to Comic
        </Button>
        <UnorderedList>
          {resultDatas && resultDatas.length > 0 ? (
            resultDatas.map((character) => {
              return <CharacterItem character={character} key={character.id} />;
            })
          ) : (
            <Text>Sorry... No Characters</Text>
          )}
        </UnorderedList>
      </VStack>
    </Skeleton>
  );
};

export default ComicCharacters;
