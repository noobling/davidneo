import {
  Box,
  Button,
  ResponsiveContext,
  RoutedAnchor,
  RoutedButton,
  Text,
} from "grommet";
import React from "react";
import Image from "next/image";
import logo from "../public/logo-rounded.png";

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
            <Image src={logo} alt="logo" />
          </Box>
        }
        label={size !== "small" && <Text size="xlarge">DAVID&amp;NEO</Text>}
      />

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
    </Box>
  );
};

export default Header;
