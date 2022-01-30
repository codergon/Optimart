import React, { useEffect, useState } from "react";
import ExploreNav from "./ExploreNav";
import sty from "./Explorer.module.css";
import AssetItem from "../components/AssetItem";
import SideDecor from "../components/SideDecor";

import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      getDocs(collection(db, "nft")).then((querySnapshot) => {
        const nftArray = [];
        querySnapshot.forEach((doc) => {
          nftArray.push(doc.data());
        });
        setData(nftArray);
        console.log(data);
      });
    };

    getNfts();
  }, []);

  return (
    <div className={sty.explorer_container}>
      <ExploreNav />
      <div className={sty.explore_sect}>
        <SideDecor />
        <div className={sty.explore_list}>
          {data?.map((item, index) => {
            return <AssetItem data={item} key={index} />;
          })}

          {/* {data?.length % 4} */}
        </div>
      </div>
    </div>
  );
};

export default index;
