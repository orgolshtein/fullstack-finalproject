import styled from "styled-components";
import { darken } from "polished";
import * as AppColor from "./colors";

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: ${AppColor.MainTheme1};
    height: 7.8rem;
    width: 100%;
    font-weight: 300;
    position: fixed;
    top: 0;
    z-index: 101;

    @media only screen and (max-width: 1024px){
        display: block;
    }

    @media only screen and (max-width: 768px){
        height: 5rem;
    }
    
    .headerContent{
        width: 90rem;
        display: block;
        padding: 0.7rem 5rem 1.15rem;
        height: 7.8rem;
        position: fixed;

        @media only screen and (max-width: 1024px){
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        @media only screen and (max-width: 768px){
        height: 5rem;
        }

        @media only screen and (max-width: 412px){
            gap: 1rem;
        }
    
        .authGrid {
            display: grid;
            grid-template-columns: 12rem 12rem 8rem;
            grid-template-rows: 2rem 0.1rem 1rem;
            position: absolute;
            top: 1.7rem;
            right: 2%;
            gap: 0.7rem;

            @media only screen and (max-width: 1024px){
                display: none;
            }

            a {
            font-weight: 550;
            text-decoration: underline;
            cursor: pointer;
            transition: color .15s ease-out;
            
                &:hover {
                    color: ${darken(0.2, AppColor.MainText)};
                }
            }
        
            .msgContainer{
                color: ${AppColor.ErrorText};
                font-weight: 100;
                font-size: 90%;
            }
        }

        .authResponsive{
            display:flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            @media only screen and (min-width: 1024px){
                display: none;
            }
        }
    }
`

export const GalleryDiv = styled.div`
    margin-top: 7.5rem;
    position: relative;
    width: 100%;
    background: ${AppColor.GalleryBackground};

    @media only screen and (max-width: 768px){
      margin-top: 5rem;
    }

    @media only screen and (max-height: 412px){
      display: none;
    }

    .swiper {
      width: 90rem;
      height: 18rem;

      @media only screen and (max-width: 1024px){
        width: 70rem;
        height: 15rem;
      }

      @media only screen and (max-width: 768px){
        width: 100%;
        height: 18rem;
      }

      @media only screen and (max-width: 412px){
        height: 12rem;
      }
    }

    .swiper-slide img {
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: fill;
        
        @media only screen and (max-width: 412px) {
          width: fit-content;
          height: 11.5rem;                
        }
    }

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: var(--swiper-pagination-bottom, 10px);
      top: var(--swiper-pagination-top, auto);
      left: 0;
      width: 100%;
    }

    .swiper-pagination-bullet {
      width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 12px));
      height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 12px));
      display: inline-block;
      border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
      background: ${AppColor.MainText};
      opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.4);

      @media only screen and (max-width: 768px) {
        display: none;            
      }
    }

    .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
    }

    h1{
        padding-top: 2rem;
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
        line-height: 1.1;
        color: ${AppColor.ErrorText};
        text-align: center;
    }
`

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    @media only screen and (max-width: 1024px){
        width: 100%;
    }
`;

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

export const NotFoundDiv = styled.div`
    margin-top: 9.5rem;
    height: 100vh;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

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

        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const FooterDiv = styled.div`
    background-color: ${AppColor.MainTheme1};
    font-weight: 300;
    position: relative;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 10rem 10% 10rem;
    height: 7.8rem;
    z-index: 100;
    text-align: center;
    gap: 2rem;
    margin-top: 5rem;
    margin-bottom:0;

     @media only screen and (max-width: 768px) {
        height: fit-content; 
        z-index: 0;  
        margin: 0;
        padding: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;  
    }

    @media only screen and (max-height: 412px){
            width: 100%
        }

    img{
        width: 70rem;

        @media only screen and (max-width: 768px) {
            width: 90%;          
        }

        @media only screen and (max-height: 412px){
            width: 100%
        }
    }

    p{
        line-height: 1.2rem;
        
        @media only screen and (max-width: 768px) {
            width: 100%;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            font-size:0.8rem;
        }
    }
`
