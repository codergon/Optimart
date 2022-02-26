import React from "react";
import sty from "./Explorer.module.css";

const ExploreNav = () => {
  return (
    <div className={sty.explore_nav}>
      <div className={sty.explore_nav_container}>
        <div className={sty.explore_nav_hero}>
          <p className={sty.explore_nav_hero_text}>
            Explore Several Unique Assets
          </p>
        </div>

        <div className={sty.explore_filters}>
          <div className={sty.explore_type}>
            {["Singles", "Collections"].map((item, index) => {
              return (
                <div
                  className={
                    index == 0
                      ? sty.explore_type_item_active
                      : sty.explore_type_item
                  }
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className={sty.explore_category}></div>

          <hr className={sty.explore_nav_hor_line} />
        </div>
      </div>
    </div>
  );
};

export default ExploreNav;
