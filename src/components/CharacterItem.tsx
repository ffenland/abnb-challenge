import React from "react";
import { CharactersResponse, Item2 } from "../types";
import { useQuery } from "@tanstack/react-query";
import { characterDetail } from "../api";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CharacterItem: React.FC<{ character: Item2 }> = ({ character }) => {
  const characterId = character.resourceURI.split("/").pop();
  const { isLoading, data } = useQuery<CharactersResponse>(
    ["character", characterId],
    characterDetail
  );

  return (
    <HStack
      overflow={"hidden"}
      mt={4}
      as={Link}
      to={`/characters/${data?.data.results[0].id}`}
      border={"2px"}
      borderColor={"gray.100"}
      p={2}
      shadow={"md"}
      rounded={"xl"}
      _hover={{ bgColor: "gray.100" }}
    >
      <Image
        w={"70px"}
        aspectRatio={1}
        rounded={"full"}
        src={`${data?.data.results[0].thumbnail.path}.jpg`}
      />
      <VStack alignItems={"start"} overflow={"hidden"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {data?.data.results[0].name}
        </Text>
        <Text isTruncated whiteSpace={"normal"} noOfLines={1}>
          {data?.data.results[0].description}
        </Text>
      </VStack>
    </HStack>
  );
};

export default CharacterItem;
