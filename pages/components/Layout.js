import Header from "./Header";
import Navbar from "./Navbar";
import ScrollBar from "./ScrollBar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header headerTitle={"Optimart"} />
      <ScrollBar />

      <main className="main">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
