import { useContext } from "react";
import { AppContext } from "../state/AppContext";
import { useOncePostMount } from "../hooks/useOncePostMount";
import Header from "../components/header/Header";
import { MainContentDiv } from "../styles/containersMain";
import NotFound from "../components/NotFound";
import Footer from "../components/footer/Footer";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";
import BannerGallery from "../components/gallery/BannerGallery";
import { GamesContainer } from "../styles/containersGames";
import GameTabs from "../components/games-section/GameTabs";
import Home from "../components/games-section/Home";
import NewGames from "../components/games-section/NewGames";
import SlotGames from "../components/games-section/SlotGames";
import TableGames from "../components/games-section/TableGames";
import { Outlet } from "react-router-dom";

export default function NotFoundLayout () {
  const { updateWidth } = useContext(AppContext);

  useOncePostMount(() => {
    window.addEventListener("resize", () => updateWidth(window.innerWidth));
  });

  return(
        <>
            <BannerGallery />
            <GamesContainer>
              <GameTabs />
              <Outlet />
            </GamesContainer>
        </>
    );
};
