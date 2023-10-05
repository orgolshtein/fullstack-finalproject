import Header from "../components/header/Header";
import BannerGallery from "../components/BannerGallery";
import { CenteredDiv } from "../styles/Containers";
import GameTabs from "../components/GameTabs";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import ToTop from "../components/ToTop";

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
        <ToTop />
    </div>
  )
};