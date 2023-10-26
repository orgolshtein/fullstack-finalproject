import styled from "styled-components";
import * as AppColor from "../styles/Colors";
import gif from "../assets/gif/salmon-skin-roll.gif"

const NotFound = () => (
    <NotFoundDiv>
        <h1>Could this page BE anymore <br />"Not Found"?</h1>
        <img src={gif} alt="Salmon Skin Roll" />
    </NotFoundDiv>
);

export default NotFound;

const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 9.5rem;
    gap: 2rem;

    h1{
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
        padding: 0;
        line-height: 1.1;
        color: ${AppColor.GameTitle};
        text-align: center;
        height: 6rem;
        text-shadow: 1px 1px 2px #000000, 0 0 1em #655e;
    }

    img{
        width: 30rem;
        border-radius: 1rem;
        filter: grayscale(60%);
        animation: play 0s steps(1, end) 1;

        @keyframes play {
            0% {
            background: url(image.gif);
            }
            100% {
            background: url(image.png);
            }
        }
    }
`;