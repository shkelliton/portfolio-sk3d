
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";
import "../App.css";

const Layout = () => {
  return (
    <>
    <Navbar />
    <br />
    <Container>
      <Outlet />
    </Container>
    <Footer />
    </>
  );
};

export default Layout;
