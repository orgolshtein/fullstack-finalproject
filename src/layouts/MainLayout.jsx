import Header from "../components/header/Header";
import BannerGallery from "../components/gallery/BannerGallery";
import { CenteredDiv } from "../styles/Containers";
import GameTabs from "../components/games-section/GameTabs";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import Footer from "../components/footer/Footer";
// import ToTop from "../components/ToTop";

export default function MainLayout () {
  return (
    <div>
        <Header />
        <BannerGallery />
        <CenteredDiv>
          <GameTabs />
          <Outlet />
        </CenteredDiv>
        <Footer />
        <ForgotPassword />
        <RegistrationBlock />
        {/* <ToTop /> */}
    </div>
  )
};