import { Box, Button, ResponsiveContext, RoutedAnchor, Text } from "grommet";
import React from "react";
import Image from "next/image";
import logo from "../public/logo-rounded.png";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      width="xlarge"
      alignSelf="center"
      gap="medium"
    >
      <RoutedAnchor
        path="/"
        icon={
          <Box height="xxsmall" width="xxsmall">
            <Image src={logo} alt="logo" quality="1" />
          </Box>
        }
        label={size !== "small" && <Text size="xlarge">DAVID&amp;NEO</Text>}
      />

      <SocialMedia />
    </Box>
  );
};

export default Header;
