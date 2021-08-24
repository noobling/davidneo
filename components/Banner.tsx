import React from "react";
import Image from "next/image";
import BannerLink from "../public/horizontal_banner.png";

export default function Banner() {
  return (
    <div>
      <Image src={BannerLink} alt="" />
    </div>
  );
}
