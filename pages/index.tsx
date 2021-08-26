import { Box } from "grommet";
import type { NextPage } from "next";
import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/ui/Heading";

const Home: NextPage = () => {
  return (
    <Box>
      <Banner />

      <Box pad="xlarge">
        <Heading
          label="Coming soon... ⏳"
          summary="podcast on careers in software"
        />
      </Box>
    </Box>
  );
};

export default Home;
