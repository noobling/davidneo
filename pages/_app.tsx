import { Grommet } from "grommet";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Section from "../components/ui/Section";
import "../styles/globals.css";

import dankTheme from "../themes/dankTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={dankTheme}>
      <Section>
        <Head>
          <title>David &amp; Neo</title>
          <meta name="description" content="David and Neo Talk" />
          <meta name="keywords" content="David and Neo, Software Careers" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Component {...pageProps} />
      </Section>
    </Grommet>
  );
}
export default MyApp;
