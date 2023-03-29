import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

        <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
