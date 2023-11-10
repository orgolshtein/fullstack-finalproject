import { useContext, useEffect } from "react";
import { AppContext } from "../state/AppContext";
import { useOncePostMount } from "../hooks/useOncePostMount";
import Header from "../components/header/Header";
import BannerGallery from "../components/gallery/BannerGallery";
import { GamesContainer } from "../styles/containersGames";
import GameTabs from "../components/games-section/GameTabs";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import Footer from "../components/footer/Footer";
import Login from "../components/popups/Login";
import GameOverlay from "../components/popups/GameOverlay";
import ToTop from "../components/ToTop";
import MainContent from "../components/main-content/MainContent";

export default function MainLayout() {
  const { updateWidth, scrollY, updateScrollY, updateToTopDisplay } = useContext(AppContext);

  useOncePostMount(() => {
    window.addEventListener("resize", () => updateWidth(window.innerWidth));
   });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      updateScrollY(window.scrollY);
      scrollY > 265 ?
        updateToTopDisplay(true) :
        updateToTopDisplay(false)
    });
  },[scrollY]);

  return (
      <div>
          <Header />
          <MainContent>
            <Outlet />
          </MainContent>
          <Footer />
          <ForgotPassword />
          <RegistrationBlock />
          <Login />
          <GameOverlay />
          <ToTop />
      </div>
  );
};
