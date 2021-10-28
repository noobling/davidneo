import { Box, Paragraph, Heading as GromHeading, HeadingProps } from "grommet";
import React from "react";

const Heading = ({
  align = "center",
  label = "",
  level = 1,
  size = "large",
  summary = "",
}) => {
  const textAlign = align === "center" ? align : undefined;
  return (
    <Box align={align}>
      <GromHeading
        level={level as HeadingProps["level"]}
        size={size}
        textAlign={textAlign}
        margin="none"
      >
        {label}
      </GromHeading>
      {summary &&
        ((typeof summary === "string" && (
          <Paragraph size="xxlarge" textAlign={textAlign}>
            {summary.toLowerCase()}
          </Paragraph>
        )) ||
          summary)}
    </Box>
  );
};



export default Heading;
