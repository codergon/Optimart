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
        Optimart
      </div>

      <div className="top_nav_links_cover">
        <div className="top_nav_links">
          {width > 900 ? (
            <>
              <ul>
                <li key={"Market"}>
                  <p>Market</p>
                </li>
                <li key={"Stats"}>
                  <p>Stats</p>
                </li>
                <div className="top_nav_currency" key={"Currency"}>
                  Algo <i className="uil uil-angle-down"></i>
                </div>
                <li key={"SignIn"}>
                  <p>Connect Wallet</p>
                </li>
                <div className="top_nav_currency" key={"Portal"}>
                  Portal <i className="uil uil-angle-down"></i>
                </div>
                <div key={"Search"} className="top_nav_search_button">
                  <p>
                    <i className="uil uil-search"></i>
                  </p>
                </div>
              </ul>
            </>
          ) : (
            <i className="uil uil-bars"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
