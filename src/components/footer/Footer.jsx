import { FooterDiv } from "../../styles/ContainersMain";
import paymentLine from "../../assets/overlays/footer-en.png";

const Footer = () => (
    <FooterDiv>
        <img src={paymentLine} alt="logo" />
        <div>
            <p>
            UnagiBet is a brand operated by Red Ross Entertainment Limited. Red Ross Entertainment Limited is licensed and regulated by the Malta Gaming Authority.
            </p>
            <p>
            Registered Address: Red Ross Entertainment Limited, 15 Yemen Road, Yemen.
            </p>
            <p>
            Gambling can be addictive. Play responsibly.
            </p>
        </div>
    </FooterDiv>
);

export default Footer;
