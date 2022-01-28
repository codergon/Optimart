import React from "react";
import data from "../data";
import ExploreNav from "./ExploreNav";
import sty from "./Explorer.module.css";
import AssetItem from "../components/AssetItem";
import SideDecor from "../components/SideDecor";

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
