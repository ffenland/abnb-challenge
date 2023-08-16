import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ComicDetailResponse } from "../types";
import { comicDetail } from "../api";
import {
  Button,
  Heading,
  Image,
  Link,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";

const Comic = () => {
  const { comicId } = useParams();
  const { isLoading, data } = useQuery<ComicDetailResponse>(
    ["comics", comicId],
    comicDetail
  );
  const resultData = data?.data.results[0];
  const resultImage = resultData?.images?.length
    ? resultData.images[0]
    : undefined;
  const description =
    resultData?.description && resultData.description.length > 0
      ? resultData?.description
      : resultData?.textObjects && resultData.textObjects.length > 0
      ? resultData.textObjects[0].text
      : "Sorry... No information.";
  console.log(resultData);
  return (
    <Skeleton isLoaded={!isLoading}>
      <VStack alignItems={"center"}>
        <Heading
          mx={{
            base: 2,
            lg: 20,
            xl: 60,
          }}
          noOfLines={2}
        >
          {resultData?.title}
        </Heading>
        <Image
          maxW={500}
          aspectRatio={0.7}
          fit={"contain"}
          rounded={"3xl"}
          boxShadow={"lg"}
          src={`${resultImage?.path}.jpg`}
          fallbackSrc="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        />
        <Text fontSize={"4xl"} fontWeight={"extrabold"}>
          Description
        </Text>
        <Text>{description}</Text>
        <Button
          as={Link}
          href={`/comics/${comicId}/characters/`}
          colorScheme="red"
        >
          See Characters
        </Button>
      </VStack>
    </Skeleton>
  );
};

export default Comic;
