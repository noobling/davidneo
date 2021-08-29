import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Grommet } from "grommet";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Section from "../components/ui/Section";
import "../styles/globals.css";
import awsconfig from "../src/aws-exports.cached";

import dankTheme from "../themes/dankTheme";
import { subscribe } from "../src/graphql/mutations";
Amplify.configure(awsconfig);
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    API.graphql({
      query: subscribe,
      variables: { email: "ehllo@gmail.com" },
    });
  }, []);

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
      w3e
    </Grommet>
  );
}
export default MyApp;
