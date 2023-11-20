import { NotFoundDiv } from "../../styles/main.content";
import gif from "../../assets/gif/salmon-skin-roll.gif"

const NotFound = () => (
    <NotFoundDiv>
        <h1>Could this page BE anymore <br />"Not Found"?</h1>
        <img src={gif} alt="Salmon Skin Roll" />
    </NotFoundDiv>
);

export default NotFound;
