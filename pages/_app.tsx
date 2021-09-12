import Amplify from "aws-amplify";
import { Grommet } from "grommet";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Section from "../components/ui/Section";
import awsconfig from "../src/aws-exports.cached";
import "../styles/globals.css";
import dankTheme from "../themes/dankTheme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Amplify.configure(awsconfig);
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
      <ToastContainer />
    </Grommet>
  );
}
export default MyApp;
