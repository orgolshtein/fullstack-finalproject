import { Outlet } from "react-router-dom";

import Header from "../components/header-footer/Header";
import { MainContentDiv } from "../styles/main.content";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import Footer from "../components/header-footer/Footer";
import Login from "../components/popups/Login";
import GameOverlay from "../components/popups/GameOverlay";
import ToTop from "../components/main-content/ToTop";

const MainLayout = () => (
  <>
    <Header />
    <MainContentDiv>
      <Outlet />
    </MainContentDiv>
    <Footer />
    <ForgotPassword />
    <RegistrationBlock />
    <Login />
    <GameOverlay />
    <ToTop />
  </>
);

export default MainLayout;
