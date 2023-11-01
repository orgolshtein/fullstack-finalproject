import styled from "styled-components";
import * as AppColor from "./Colors";

export const GameSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`;

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 87.5rem;
    background: ${AppColor.MainTheme2};
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    
    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

export const GameListDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 180px 180px 180px 180px 180px 180px;
    grid-template-rows:auto;
    gap: 1rem;
    padding: 0.7rem 0.769em 1.15rem;
    width: 88rem;
    left: 1%;

    .loading-failed{
        grid-column-start: 1;
        grid-column-end: 7;
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
        line-height: 1.1;
        color: ${AppColor.ErrorText};
        text-align: center;
    }

    .big{
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .wide-top{
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .wide-bottom{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }
`

export const GameListSmallDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0.7rem 0.769em 1.15rem;
    width: 100%;
    left: 1%;

    .loading-failed{
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
        line-height: 1.1;
        color: ${AppColor.ErrorText};
        text-align: center;
    }
`

export const PopupDiv = styled.div`
    display: flex;
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
        border-radius: 2rem;

        .inner{
            border-radius: 0.2rem;
            box-shadow: 0 0 1.5em rgba(0,0,0,.5);
            position: relative;
            background-color: ${AppColor.PopupMainBackground};

            .content{
                overflow-x: hidden;
                color: ${AppColor.PopupMainText};
                font-size: .72em;
                padding: 1em 1.15em 0;
                position: relative;
                border-radius: 0.2rem;

                .titlebox {
                    background: ${AppColor.MainTheme1};
                    color: ${AppColor.MainText};
                    margin: -1.2em -0.8em 0;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: normal;
                    font-size: 1.4rem;
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