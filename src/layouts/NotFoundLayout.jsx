import Header from "../components/header/Header";
import { GameSectionDiv } from "../styles/Containers";
import NotFound from "../components/NotFound";
import Footer from "../components/footer/Footer";
import ForgotPassword from "../components/popups/ForgotPassword";
import RegistrationBlock from "../components/popups/RegistrationBlock";

const NotFoundLayout = () => (
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

export default NotFoundLayout;