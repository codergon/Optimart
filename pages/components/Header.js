import Head from "next/head";
// import { useRouter } from "next/router";

const Header = ({ headerTitle }) => {
  //   const location = useRouter();

  return (
    <Head>
      <meta charset="utf-8" />
      <title>{headerTitle}</title>
      <meta name="keywords" conetnt="Optimart" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Optimart🛒" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default Header;
