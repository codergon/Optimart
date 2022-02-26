import React from "react";
import Currency from "./Currency";
import Countdown from "react-countdown";
import { useRouter } from "next/router";
import sty from "../../styles/Components.module.css";
import { useWindowSize } from "@react-hook/window-size/throttled";

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

const AssetItem = ({ data }) => {
  const [width] = useWindowSize();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className={sty.asset_bid_time}>
        <div className={sty.bid_time_container}>
          <p>{days < 10 ? `0${days}` : days}</p>
          <span>:</span>
          <p>{hours < 10 ? `0${hours}` : hours}</p>
          <span>:</span>
          <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
          <span>:</span>
          <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>

        <div className={sty.asset_fav_butt}>
          <i className="uil uil-heart" />
        </div>

        {/* <div className={sty.bid_time_blinker}>
          <div className={sty.bid_time_blinker_dot}></div>
          <div className={sty.bid_time_blinker_abs}></div>
        </div> */}
      </div>
    );
  };

  const router = useRouter();

  return (
    <div className={sty.asset_cover}>
      <div className={sty.asset_container}>
        {/*  */}

        <div
          className={sty.asset_image}
          onClick={() =>
            router.push(
              `/asset/${data?.asset_id}`,
              `/asset/${data?.asset_id}`,
              { scroll: true }
            )
          }
        >
          <img src={data?.img} alt="" />
        </div>

        <div className={sty.asset_details}>
          <div className={sty.asset_artiste_title}>
            <p>{data?.artiste}</p>
            <p>Bid price</p>
          </div>

          <div className={sty.asset_name_bid}>
            <p className={sty.asset_name}>{data?.asset_name}</p>

            <p className={sty.list_price_value}>
              <Currency size={width < 600 ? 12 : 14} />
              {AbbreviatedNumber(data?.price * 3.1)}
            </p>
          </div>

          <hr className={sty.asset_hor_line} />

          <Countdown
            date={Date.now() + data?.price * 2001}
            renderer={renderer}
          />

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
