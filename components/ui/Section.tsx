import { Box, BoxProps } from "grommet";
import React from "react";

interface SectionProps {}

const Section: React.FC<SectionProps> = ({ children }) => (
  <Box align="center" pad={"large"}>
    <Box width="xlarge">{children}</Box>
  </Box>
);

export default Section;
