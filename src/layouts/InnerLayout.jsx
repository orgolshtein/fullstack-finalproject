import { Outlet } from "react-router-dom";
import BannerGallery from "../components/main-content/BannerGallery";
import { GamesContainer } from "../styles/main.content";
import GameTabs from "../components/main-content/GameTabs";

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
