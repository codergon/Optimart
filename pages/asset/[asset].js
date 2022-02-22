import sty from "./AssetDetails.module.css";
import { Router, useRouter } from "next/router";
import Currency from "../components/Currency";
import { db } from "../../firebase";
import Countdown from "react-countdown";

import { useEffect, useState } from "react";
import Suggested from "../components/Suggested";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const AbbreviatedNumber = (num) => {
  //

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

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

const AssetDetails = ({ asset_info, collectionAssets }) => {
  //

  const asset_data = JSON.parse(asset_info);

  const wallet_address =
    "CFTKEX3OBLKQH2M7GE6KPMLJPXDKFCT2EKBRJKL62P3VONOZR6N2GGPU7Q";

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(collectionAssets));
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <>--:--:--:--</>;
    } else {
      return (
        <>
          {days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </>
      );
    }
  };

  return (
    <div className={sty.showcase_container}>
      <div className={sty.showcase_inn}>
        <div className={sty.showcase_all_about_asset}>
          <div className={sty.showcase_first_sect}>
            <div className={sty.showcase_img_cov}>
              <img src={asset_data?.img} alt="" />
            </div>

            <div className={sty.showcase_dets}>
              <div className={sty.showcase_dets_inn}>
                <div className={sty.shcs_name}>{asset_data?.asset_name}</div>
                <div className={sty.shcs_buy_cont}>
                  <div className={sty.shcs_buy_price}>
                    <p className={sty.shcs_buy_price_p1}>Current Bid</p>
                    <div className={sty.shcs_buy_price_sect}>
                      <p>{AbbreviatedNumber(asset_data?.price)}</p>
                      <Currency size={12} />
                      <p>Algo</p>
                    </div>
                  </div>
                  <div className={sty.shcs_buy_now_butt}>Buy Now</div>
                </div>

                <div className={sty.shcs_creator_likes}>
                  <div className={sty.shcs_creator}>
                    <div className={sty.shcs_creator_img}>
                      <img
                        src="https://i.postimg.cc/x1GKpjsd/29113267470227-5b3b2f014a1f9.jpg"
                        alt=""
                      />
                    </div>
                    <div className={sty.shcs_creator_name}>
                      <p>Creator</p>
                      <p>{asset_data?.artiste}</p>
                    </div>
                  </div>

                  <div className={sty.shcs_likes}>
                    <div className={sty.shcs_creator_like_butt}>
                      <i className="uil uil-heart-alt"></i>
                    </div>
                    <div className={sty.shcs_creator_like_num}>
                      <p>Likes</p>
                      <p>1,700</p>
                    </div>
                  </div>
                </div>

                <div className={sty.shcs_details}>
                  <div className={sty.shcs_details_head}>
                    <div className={sty.shcs_details_head_butts}>
                      <div
                        className={`${sty.shcs_details_butt} ${
                          true ? sty.shcs_details_active_butt : null
                        }`}
                      >
                        Details
                      </div>
                      <div
                        className={`${sty.shcs_details_price_butt} ${
                          false ? sty.shcs_details_active_butt : null
                        }`}
                      >
                        Price History
                      </div>
                    </div>

                    <div className={sty.shcs_details_time_sect}>
                      <Countdown
                        date={Date.now() + asset_data?.price}
                        renderer={renderer}
                      />
                    </div>
                  </div>

                  <ul className={sty.shcs_details_cont}>
                    <li className={sty.shcs_details_li}>
                      <div className={sty.shcs_details_li_title}>
                        <span style={{ background: "#acc95b" }}></span>
                        <p>Date</p>
                      </div>

                      <p>Feb 21, 2022, 12:53 PM</p>
                    </li>
                    <li className={sty.shcs_details_li}>
                      <div className={sty.shcs_details_li_title}>
                        <span style={{ background: "#a05aba" }}></span>
                        <p>Status</p>
                      </div>

                      <p>On Sale</p>
                    </li>
                    <li className={sty.shcs_details_li}>
                      <div className={sty.shcs_details_li_title}>
                        <span style={{ background: "#ffa889" }}></span>
                        <p>Token ID</p>
                      </div>

                      <p>2354</p>
                    </li>
                    <li className={sty.shcs_details_li}>
                      <div className={sty.shcs_details_li_title}>
                        <span style={{ background: "#2b0fff" }}></span>
                        <p>Blockchain</p>
                      </div>

                      <p>Algorand</p>
                    </li>
                    <li className={sty.shcs_details_li}>
                      <div className={sty.shcs_details_li_title}>
                        <span style={{ background: "#000" }}></span>
                        <p>Contact Address</p>
                      </div>

                      <p>{`${wallet_address.substring(
                        0,
                        6
                      )}...${wallet_address.slice(-4)}`}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={sty.showcase_second_sect}>
            <div className={sty.showcase_about_item}>
              <div className={sty.showcase_about_item_hd}>
                <div>
                  <i className="uil uil-notes"></i> <p>Description</p>
                </div>
              </div>
              <div className={sty.showcase_about_item_cont}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aut, quis ipsam fuga, repudiandae voluptatum reprehen derit
                voluptas aliquid quisquam officia nisi maxime modi quaerat est
                omnis labore? Officiis, quis reiciendis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Fugiat aut, quis ipsam fuga,
                repudiandae voluptatum reprehen derit voluptas aliquid quisquam
                officia nisi maxime modi quaerat est omnis labore? Officiis,
                quis reiciendis.
              </div>
            </div>
          </div>
        </div>

        <div className={sty.more_collection}>
          {data?.map((item, index) => {
            return <Suggested data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;

export async function getServerSideProps(context) {
  const docRef = doc(db, "nft", context.query.asset);
  const docSnap = await getDoc(docRef);

  let nftArray = [];

  await getDocs(collection(db, "nft")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const { price, img, artiste, asset_name, time_remaining } = doc.data();
      nftArray.push({
        asset_id: doc.id,
        price,
        img,
        artiste,
        asset_name,
        time_remaining,
      });
    });
  });

  if (docSnap.exists()) {
    return {
      props: {
        asset_info: JSON.stringify(docSnap.data()),
        collectionAssets: JSON.stringify(nftArray),
      },
    };
  } else {
    return {
      props: {
        asset_info: null,
        collectionAssets: JSON.stringify(nftArray),
      },
    };
  }
}
