import React from "react";
import Currency from "./Currency";
import Countdown from "react-countdown";
import sty from "../../styles/Components.module.css";

const AbbreviatedNumber = (num) => {
  var newValue = num;
  if (num >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + num).length / 3);
    var shortValue = "";
    var precisionType = 2;

    if (("" + num).length / 3 > 1.34) {
      precisionType = 3;
    }

    for (var precision = precisionType; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(
          precision
        )
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= precisionType) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};

const AssetItem = ({ data }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
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
      );
    } else {
      return (
        <div className={sty.asset_bid_time}>
          <div className={sty.bid_time_container}>
            <span>
              {days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}
              :{minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        </div>
      );
    }
  };

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

          <Countdown date={Date.now() + data?.price} renderer={renderer} />

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
