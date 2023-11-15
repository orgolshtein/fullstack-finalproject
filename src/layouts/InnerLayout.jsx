import BannerGallery from "../components/gallery/BannerGallery";
import { GamesContainer } from "../styles/containersGames";
import GameTabs from "../components/games-section/GameTabs";
import { Outlet } from "react-router-dom";

const InnerLayout = () => (
  <>
    <BannerGallery />
    <GamesContainer>
      <GameTabs />
      <Outlet />
    </GamesContainer>
  </>
);

    export default InnerLayout;
