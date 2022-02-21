import sty from "./AssetDetails.module.css";
import { useRouter } from "next/router";
import Currency from "../components/Currency";
import { db } from "../../firebase";

import { useEffect, useState } from "react";
import Suggested from "../components/Suggested";
import { collection, getDocs } from "firebase/firestore";

const AssetDetails = () => {
  const router = useRouter();
  const { asset } = router.query;

  const wallet_address =
    "CFTKEX3OBLKQH2M7GE6KPMLJPXDKFCT2EKBRJKL62P3VONOZR6N2GGPU7Q";

  const [data, setData] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      getDocs(collection(db, "nft")).then((querySnapshot) => {
        const nftArray = [];
        querySnapshot.forEach((doc) => {
          nftArray.push(doc.data());
        });
        setData(nftArray);
      });
    };

    getNfts();
  }, []);

  return (
    <div className={sty.showcase_container}>
      <div className={sty.showcase_inn}>
        <div className={sty.showcase_all_about_asset}>
          <div className={sty.showcase_first_sect}>
            <div className={sty.showcase_img_cov}>
              <img
                src="https://ipfs.pixura.io/ipfs/QmQ9PV6gUG8UnqtCPhr1K3zZXtbN4oDABdMQoR8nEKGEgP/droid-jn5x69.jpg"
                alt=""
              />
            </div>

            <div className={sty.showcase_dets}>
              <div className={sty.showcase_dets_inn}>
                <div className={sty.shcs_name}>Little Animals</div>
                <div className={sty.shcs_buy_cont}>
                  <div className={sty.shcs_buy_price}>
                    <p className={sty.shcs_buy_price_p1}>Current Bid</p>
                    <div className={sty.shcs_buy_price_sect}>
                      <p>0.978</p>
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
                        src="https://ipfs.pixura.io/ipfs/QmfDEUjjncpPGUjQrBgXgXYrqQMA5NHgbLFs2Z6A3TNhL8/Untitled_Artwork8.png"
                        alt=""
                      />
                    </div>
                    <div className={sty.shcs_creator_name}>
                      <p>Creator</p>
                      <p>Alpha Glitch</p>
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
                      12:30:40:01
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
