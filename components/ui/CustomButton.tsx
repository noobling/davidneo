import { Box, Button, Text } from "grommet";
import React from "react";

const CustomButton = () => (
  <Button plain>
    {({ hover }: any) => (
      <Box
        pad={{ vertical: "small", horizontal: "medium" }}
        round="xlarge"
        background={hover ? "active" : "control"}
      >
        <Text>Subscribe</Text>
      </Box>
    )}
  </Button>
);

export default CustomButton;
