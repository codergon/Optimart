import React from "react";
import sty from "./Explorer.module.css";

const ExploreNav = () => {
  return (
    <div className={sty.explore_nav}>
      <div className={sty.explore_type}>
        {["collections", "single"].map((item, index) => {
          return (
            <div
              className={
                index == 1
                  ? sty.explore_type_item_active
                  : sty.explore_type_item
              }
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className={sty.explore_category}></div>
    </div>
  );
};

export default ExploreNav;
