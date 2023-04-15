
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Footer } from "./Footer";
import "../App.css";

const Layout = () => {
  return (
    <>
    <div className="container">
      <Navbar />
    </div>
    <div className="container">
      <Outlet />
    </div>
    <div className="container">
      <Footer />
    </div>
    </>
  );
};

export default Layout;
