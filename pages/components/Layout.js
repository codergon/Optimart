import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header headerTitle={"Optimart"} />
      <Navbar />

      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
