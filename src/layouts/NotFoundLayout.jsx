import { useContext, useEffect } from "react";
import { AppContext } from "../state/AppContext";
import { useOncePostMount } from "../hooks/UseOnce";
import Header from "../components/header/Header";
import { GameSectionDiv } from "../styles/ContainersMain";
import NotFound from "../components/NotFound";
import Footer from "../components/footer/Footer";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";

export default function NotFoundLayout () {
  const { updateWidth } = useContext(AppContext);

  useOncePostMount(() => {
    const handleResizeWindow = () => updateWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   });

  return(
        <div>
            <Header />
            <GameSectionDiv>
              <NotFound />
            </GameSectionDiv>
            <Footer />
            <ForgotPassword />
            <RegistrationBlock />
        </div>
    );
};
