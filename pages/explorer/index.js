import React from "react";
import ExploreNav from "./ExploreNav";
import sty from "./Explorer.module.css";
import AssetItem from "../components/AssetItem";
import SideDecor from "../components/SideDecor";

const data = [
  {
    asset_name: "Squeaky",
    artiste: "Alpha🎈",
    price: 4820,
    time_remaining: "5 days",
    img: "https://i.postimg.cc/BXRTCbCp/1.jpg",
  },
  {
    asset_name: "Ape monk",
    artiste: "davebot",
    price: 230700,
    time_remaining: "2 hours",
    img: "https://i.postimg.cc/XrFw1WHb/2.jpg",
  },
  {
    asset_name: "Egg #1456",
    artiste: "shockwaver",
    price: 73500,
    time_remaining: "48 min",
    img: "https://i.postimg.cc/Q9N1MTX8/3.jpg",
  },
  {
    asset_name: "Bruno #x8uj9",
    artiste: "beau",
    price: 48190,
    time_remaining: "23 days",
    img: "https://i.postimg.cc/0MtmKyQp/4.jpg",
  },
  {
    asset_name: "Abstract",
    artiste: "countybot",
    price: 95672,
    time_remaining: "13 hours",
    img: "https://i.postimg.cc/JyLj9FvB/5.jpg",
  },
  {
    asset_name: "99778z6h7h88",
    artiste: "certified",
    price: 130,
    time_remaining: "32 min",
    img: "https://i.postimg.cc/QBJcsbZY/6.png",
  },
];

const index = () => {
  return (
    <div className={sty.explorer_container}>
      <ExploreNav />
      <div className={sty.explore_sect}>
        <SideDecor />
        <div className={sty.explore_list}>
          {data?.map((item, index) => {
            return <AssetItem data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
