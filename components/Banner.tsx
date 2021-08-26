import React from "react";
import Image from "next/image";
import BannerLink from "../public/horizontal_banner.png";
import { Box } from "grommet";

export default function Banner() {
  return (
    <Box width="xlarge" pad="large">
      <Image src={BannerLink} alt="" />
    </Box>
  );
}
