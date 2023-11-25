import { FooterDiv } from "../../styles/header.footer";
import { assetUrl } from "../../api/app.api";

const Footer = () => (
    <FooterDiv>
        <img src={`${assetUrl}/overlays/footer-en.png`} alt="Payment Methods" />
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
