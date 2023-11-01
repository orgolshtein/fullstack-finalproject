import { useContext, useEffect, useState } from "react";
import { AppContext } from "../state/AppContext";
import Header from "../components/header/Header";
import BannerGallery from "../components/gallery/BannerGallery";
import { GameSectionDiv, GamesContainer } from "../styles/Containers";
import GameTabs from "../components/games-section/GameTabs";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import Footer from "../components/footer/Footer";
import Login from "../components/popups/Login";
import GameOverlay from "../components/popups/GameOverlay";
import ToTop from "../components/ToTop";

export default function MainLayout() {
  const { updateWidth, scrollY, updateScrollY, updateToTopDisplay } = useContext(AppContext);

  useEffect(() => {
    const handleResizeWindow = () => updateWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
  
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", ()=>{
        updateScrollY(window.scrollY);
        if (scrollY > 265){
          updateToTopDisplay(true)
        } else{
          updateToTopDisplay(false)
        }
      });
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", ()=>{
        updateScrollY(window.scrollY);
        if (scrollY > 265){
          updateToTopDisplay(true)
        } else{
          updateToTopDisplay(false)
        }
      });
    };
  });

  return (
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
          <GameOverlay />
          <ToTop />
      </div>
  );
}