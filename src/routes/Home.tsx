import { useLoaderData } from "react-router-dom";
import { ComicsResponse } from "../types";
import { Box, Grid } from "@chakra-ui/react";
import ComicItem from "../components/ComicItem";

export const Home = () => {
  const {
    data: { results },
  } = useLoaderData() as ComicsResponse;

  return (
    <Box>
      <Grid templateColumns={"repeat(auto-fit, minmax(360px, 1fr))"} gap={2}>
        {results?.map((result) => (
          <ComicItem key={result.id} comic={result} />
        ))}
      </Grid>
    </Box>
  );
};
