import React from "react";
import sty from "../../styles/Components.module.css";
import NumberWithCommas from "../utils/numberWithCommas";

const AssetItem = ({ data }) => {
  return (
    <div className={sty.asset_cover}>
      <div className={sty.asset_image}>
        <img src={data?.img} alt="" />
      </div>

      <div className={sty.asset_details}>
        <div className={sty.asset_name_time}>
          <p>{data?.asset_name}</p>
          <p>{data?.time_remaining}</p>
        </div>

        <div className={sty.asset_price_artiste}>
          <p>{NumberWithCommas(data?.price)} Choice</p>
          <p>{data?.artiste}</p>
        </div>

        <div className={sty.asset_fav_bid}>
          <div className={sty.asset_fav_button}>
            <i className="uil uil-heart-alt"></i>
          </div>
          <div className={sty.asset_bid_button}>
            <p>Bid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
