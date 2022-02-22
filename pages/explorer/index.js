import React, { useEffect, useState } from "react";
import ExploreNav from "./ExploreNav";
import sty from "./Explorer.module.css";
import AssetItem from "../components/AssetItem";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Explore = ({ assets }) => {
  console.log(JSON.parse(assets));
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!!JSON.parse(assets)) {
      setData(JSON.parse(assets));
    }
  }, []);

  return (
    <div className={sty.explorer_container}>
      <ExploreNav />
      <div className={sty.explore_sect}>
        <div className={sty.explore_list}>
          {data?.map((item, index) => {
            return <AssetItem data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;

export async function getServerSideProps(context) {
  let nftArray = [];

  await getDocs(collection(db, "nft")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const { price, img, artiste, asset_name, time_remaining } = doc.data();
      nftArray.push({
        asset_id: doc.id,
        price,
        img,
        artiste,
        asset_name,
        time_remaining,
      });
    });
  });

  return {
    props: {
      assets: JSON.stringify(nftArray),
    },
  };
}
