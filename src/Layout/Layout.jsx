import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
