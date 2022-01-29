import Logo from "./Logo";
import { useWindowSize } from "@react-hook/window-size/throttled";

const Navbar = () => {
  const [width] = useWindowSize();

  const wallet_address =
    "CFTKEX3OBLKQH2M7GE6KPMLJPXDKFCT2EKBRJKL62P3VONOZR6N2GGPU7Q";

  return (
    <nav className="top_navbar">
      <div className="main_logo">
        <Logo />
        optimart
      </div>

      <div className="top_nav_links">
        {width > 1090 && (
          <>
            <ul>
              {["Explorer", "Charts", "Resources"].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${index === 0 ? "active_page" : ""}`}
                  >
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
            <div className="top_nav_currency">
              Algo <i className="uil uil-angle-down"></i>
            </div>
          </>
        )}

        {width > 410 && (
          <div className="top_nav_profile">
            <div className="top_nav_avatar">
              <img
                src="https://i.postimg.cc/sxFY0BRv/care-for-colors-02.jpg"
                alt="avatar"
              />
            </div>

            <div className="top_nav_wallet_addr">
              {`${wallet_address?.slice(0, 7)}...${wallet_address?.slice(-3)}`}
            </div>
          </div>
        )}

        <div className="config_button">
          {width > 1090 ? (
            <i className="uil uil-wallet" />
          ) : (
            <i className="uil uil-setting" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
