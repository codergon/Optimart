import React from "react";
import sty from "../../styles/Components.module.css";
import AbbreviatedNumber from "../utils/AbbreviatedNumber";
import Currency from "./Currency";

const AssetItem = ({ data }) => {
  return (
    <div className={sty.asset_cover}>
      <div className={sty.asset_container}>
        {/*  */}

        <div className={sty.asset_image}>
          <img src={data?.img} alt="" />
        </div>

        <div className={sty.asset_details}>
          <div className={sty.asset_name_bid}>
            <p className={sty.asset_name}>{data?.asset_name}</p>

            <div className={sty.list_bid_price}>
              <div className={sty.list_price}>
                <p className={sty.list_price_title}>List price</p>
                <p className={sty.list_price_value}>
                  <Currency size={15} />
                  {AbbreviatedNumber(data?.price)}
                </p>
              </div>

              <div className={sty.bid_price}>
                <p className={sty.bid_price_title}>Bid price</p>
                <p className={sty.bid_price_value}>
                  <Currency size={15} />
                  {AbbreviatedNumber(data?.price * 3.1)}
                </p>
              </div>
            </div>
          </div>

          <hr className={sty.asset_hor_line} />

          {data?.price === 130 ? (
            <div className={sty.asset_bid_time}>
              <div className={sty.bid_time_container}>
                <p>00</p>:<p>01</p>:<p>32</p>
              </div>
            </div>
          ) : (
            <div className={sty.artiste_dets}>
              <div className={sty.artiste_dets_container}>
                <div className={sty.artiste_img}>
                  <img
                    src="https://i.postimg.cc/sxFY0BRv/care-for-colors-02.jpg"
                    alt=""
                  />
                </div>

                <p className={sty.artiste_name}>{data?.artiste}</p>
              </div>

              <div className={sty.artiste_follow_button}>Follow</div>
            </div>
          )}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
