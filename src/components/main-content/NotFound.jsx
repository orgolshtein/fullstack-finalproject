import { NotFoundDiv } from "../../styles/main.content";
import { assetUrl } from "../../api/app.api";

const NotFound = () => (
    <NotFoundDiv>
        <h1>Could this page BE anymore <br />"Not Found"?</h1>
        <img src={`${assetUrl}/gif/salmon-skin-roll.gif`} alt="Salmon Skin Roll" />
    </NotFoundDiv>
);

export default NotFound;
