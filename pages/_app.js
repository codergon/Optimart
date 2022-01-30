import Head from "next/head";
import "../styles/globals.css";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  //

  return (
    <Layout>
      <Head>
        <meta property="og:image" content="/og.png" />
        <meta property="twitter:image" content="/og.png" />
        <link rel="shortcut icon" href="/Optimart.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
