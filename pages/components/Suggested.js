import React from "react";
import Currency from "./Currency";
import Countdown from "react-countdown";
import sty from "../../styles/Components.module.css";

const AbbreviatedNumber = (num) => {
  var newValue = num;
  if (num >= 1000) {
    var suffixes = ["", "k", "m", "b", "t", "Q"];
    var suffixNum = Math.floor(("" + Math.floor(num)).length / 3);
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

const Suggested = ({ data }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className={sty.asset_bid_time_suggested}>
        <p className={sty.auction_ends_p}> Auction Ends in</p>
        <div className={sty.bid_time_container_suggested}>
          <span>
            {!completed
              ? `${days < 10 ? `0${days}` : days}:${
                  hours < 10 ? `0${hours}` : hours
                }:${minutes < 10 ? `0${minutes}` : minutes}:${
                  seconds < 10 ? `0${seconds}` : seconds
                }`
              : "--:--:--:--"}
          </span>
          <div className={sty.bid_time_blinker}>
            <div className={sty.bid_time_blinker_dot}></div>
            <div className={sty.bid_time_blinker_abs}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={sty.asset_cover_suggested_cover}>
      <div className={sty.asset_cover_suggested}>
        <div className={sty.asset_container}>
          <div className={sty.asset_image}>
            <img src={data?.img} alt="" />
          </div>

          <div className={sty.asset_details_suggested}>
            <div className={sty.asset_name_bid}>
              <div className={sty.asset_name_price_suggested}>
                <p className={sty.asset_name}>{data?.asset_name}</p>

                <div className={sty.bid_price}>
                  <p className={sty.bid_price_value}>
                    <Currency size={13} />
                    {AbbreviatedNumber(data?.price * 1.1)}
                  </p>
                </div>
              </div>

              <Countdown date={Date.now() + data?.price} renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggested;
