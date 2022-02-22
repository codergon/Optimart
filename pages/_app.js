import Head from "next/head";
import "../styles/globals.css";
import NProgress from "nprogress";
import Layout from "./components/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  //

  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />

      <Layout>
        <Head>
          <meta property="og:image" content="/og.png" />
          <meta property="twitter:image" content="/og.png" />
          <link rel="shortcut icon" href="/Optimart.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
