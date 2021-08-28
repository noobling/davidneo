import { Box, Footer } from "grommet";
import type { NextPage } from "next";
import React from "react";
import Banner from "../components/Banner";
import SignUp from "../components/SignUp";
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
      <SignUp />
    </Box>
  );
};

export default Home;
