import Head from "next/head";
// import { useRouter } from "next/router";

const Header = ({ headerTitle }) => {
  //   const location = useRouter();

  return (
    <Head>
      <meta charset="utf-8" />
      {/* <title>{headerTitle}</title> */}
      <meta name="keywords" content="Optimart" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" href="/OptiMart.png" />

      <title>OptiMart, The largest NFT marketplace on Algorand Network.</title>
      <meta
        name="title"
        content="OptiMart, The largest NFTs marketplace on Algorand Network."
      />
      <meta
        name="description"
        content="Decentralized marketplace for NFTs built on Algorand Network. Explore, buy, sell, and auction all forms of Digital Assets and Collectibles."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.optimart.io/" />
      <meta
        property="og:title"
        content="OptiMart, The largest NFTs marketplace on Algorand Network."
      />
      <meta
        property="og:description"
        content="Decentralized marketplace for NFTs built on Algorand Network. Explore, buy, sell, and auction all forms of Digital Assets and Collectibles."
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.optimart.io/" />
      <meta
        property="twitter:title"
        content="OptiMart, The largest NFTs marketplace on Algorand Network."
      />
      <meta
        property="twitter:description"
        content="Decentralized marketplace for NFTs built on Algorand Network. Explore, buy, sell, and auction all forms of Digital Assets and Collectibles."
      />
    </Head>
  );
};

export default Header;
