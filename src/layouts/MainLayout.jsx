import Header from "../components/header/Header";
import { MainContentDiv } from "../styles/containersMain";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import Footer from "../components/footer/Footer";
import Login from "../components/popups/Login";
import GameOverlay from "../components/popups/GameOverlay";
import ToTop from "../components/ToTop";

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
