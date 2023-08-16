import { redirect, Link } from "react-router-dom";
import { ComicsResult } from "../types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ComicItem = ({ comic }: { comic: ComicsResult }) => {
  return (
    <Card maxW="sm" shadow={"md"} _hover={{ bg: "gray.50" }}>
      <CardBody>
        <Image
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt="Green double couch with wooden legs"
          h={280}
          borderRadius="lg"
          fit={"cover"}
          mx={"auto"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{comic.title}</Heading>
          <Text noOfLines={4}>
            {comic.description ? comic.description : "설명이 없습니다."}
          </Text>
        </Stack>
      </CardBody>
      <Divider color={"red.300"} />
      <CardFooter justifyContent={"center"}>
        <Button
          as={Link}
          to={`/comics/${comic.id}`}
          variant="solid"
          colorScheme="red"
        >
          Go to details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComicItem;
