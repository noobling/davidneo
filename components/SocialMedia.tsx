import { FacebookOption, Instagram, Twitter, Youtube } from "grommet-icons";
import { Anchor, Box } from "grommet";

const SocialMedia = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      target="_blank"
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Follow us on Youtube"
      href="https://youtube.com/"
      icon={<Youtube color="brand" size="medium" />}
    />
  </Box>
);

export default SocialMedia;
