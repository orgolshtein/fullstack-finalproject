import styled from "styled-components";
import * as AppColor from "./Colors";

export const GameSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 87.5rem;
    background: ${AppColor.MainLight};
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
`

export const GameListDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.7rem 0.769em 1.15rem;
    width: 88rem;
    left: 1%;
`

export const PopupDiv = styled.div`
    display: ${(props)=>props.display};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: ${(props)=>props.$zindex};
    backdrop-filter: blur(15px);

    .flexContainer{
        min-width: ${(props)=>props.width};
        max-width: ${(props)=>props.width};
        padding: 0 1.15em;
        position: relative;
        z-index: 107;
        width: 100%;
        text-align: left;
        animation-name: bounceIn;
        pointer-events: auto;
        border-radius: 2rem;

        .inner{
            border-radius: 0.2rem;
            box-shadow: 0 0 1.5em rgba(0,0,0,.5);
            position: relative;
            background-color: ${AppColor.PopupMainBackground};

            .content{
                max-height: 95vh;
                height: auto;
                overflow-x: hidden;
                color: ${AppColor.PopupMainText};
                font-size: .72em;
                padding: 1em 1.15em 0;
                min-height: 6.6em;
                clear: both;
                position: relative;
                overflow-y: auto;
                word-wrap: break-word;
                border-radius: 0.2rem;

                .titlebox {
                    background: ${AppColor.MainDark};
                    color: ${AppColor.MainText};
                    margin: -1.2em -0.8em 0;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: normal;
                    font-size: 1.429rem;
                    font-weight: 700;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    height: ${(props) => props.$titleboxheight};
                    padding-bottom: 0.5rem;
                    gap: 0.5rem;
                }
            }
        }
    }
`

export const GameThumbContainer = styled.div`
    position: relative;
    cursor: pointer;
    &:hover{
        img{
        filter: blur(.07rem);
        }

        button{
            display:inline-block;
        }
    }
`