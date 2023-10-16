import Header from "../components/header/Header";
import BannerGallery from "../components/gallery/BannerGallery";
import { GameSectionDiv, GamesContainer } from "../styles/Containers";
import GameTabs from "../components/games-section/GameTabs";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import Footer from "../components/footer/Footer";
import Login from "../components/popups/Login";
// import ToTop from "../components/ToTop";

const MainLayout = () => (
    <div>
        <Header />
        <BannerGallery />
        <GameSectionDiv>
          <GamesContainer>
            <GameTabs />
            <Outlet />
          </GamesContainer>
        </GameSectionDiv>
        <Footer />
        <ForgotPassword />
        <RegistrationBlock />
        <Login />
        {/* <ToTop /> */}
    </div>
  );

export default MainLayout;