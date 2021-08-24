import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Anchor,
  Box,
  grommet,
  Grommet,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
} from "grommet";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={grommet}>
      <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small">
          Resize the page to collapse the Nav into a Menu
        </Box>
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === "small" ? (
              <Menu
                label="Click me"
                items={[
                  { label: "This is", onClick: () => {} },
                  { label: "The Menu", onClick: () => {} },
                  { label: "Component", onClick: () => {} },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Anchor href="#" label="This is" />
                <Anchor href="#" label="The Nav" />
                <Anchor href="#" label="Component" />
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
      <Component {...pageProps} />
    </Grommet>
  );
}
export default MyApp;
