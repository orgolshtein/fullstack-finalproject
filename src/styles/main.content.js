import styled from "styled-components";
import { darken } from "polished";

import { assetUrl } from "../api/app.api";
import * as AppColor from "./colors";

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1024px){
        width: 100%;
    }
`;

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
        text-shadow: 1px 1px 2px #000000, 0 0 1rem #655e;
    }

    img{
        width: 30rem;
        border-radius: 1rem;
        filter: grayscale(60%);

        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
`;

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

      @media (hover: none) and (pointer: coarse){
        width:100%;
      }
    }

    .swiper-slide img {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: fill;
        cursor: pointer;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        
        @media only screen and (max-width: 412px) {
            height: 11.5rem;                
            width: fit-content;
        }

        @media screen {orientation: portrait;
            width:100%;
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

      @media only screen and (max-width: 850px) {
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
`;

export const JoinGalleryBtn = styled.button`
    display: block;
    color: ${AppColor.MainText};
    background-color:${AppColor.JoinBtn};
    font-family: 'Gotham Bold',sans-serif;
    position: absolute;
    top: 13rem;
    z-index: 1;
    width: 21.4rem;
    max-width: 100%;
    margin-left: 13.8rem;
    font-size: 1.7rem;
    cursor: pointer;
    padding-top: 0.1em;
    line-height: 1.7;
    border-radius: 0.2rem;
    font-weight: 700;
    border: none;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

    &:disabled{
        color: ${darken(0.7, AppColor.MainText)};
        background-color: ${darken(0.2, AppColor.JoinBtn)};
        cursor: default;

        &:hover{
            color: ${darken(0.7, AppColor.MainText)};
            background-color: ${darken(0.2, AppColor.JoinBtn)};
        }
    }

    @media only screen and (max-width: 1024px){
        top: 11rem;
        width: 17rem;
        margin-left: 9rem;
        font-size: 1.4rem;
    }
    
    @media only screen and (max-width: 768px){
        margin-left: 1.5rem;
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 412px){
        top: 7.5rem;
        width: 11rem;
        margin-left: 3rem;
        font-size: 1rem;
    }

    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`;

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 88rem;
    background: ${AppColor.MainTheme2};
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    
    @media only screen and (max-width: 1024px){
        width: 100%;
    }
`;

export const GameListDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 180px 180px 180px 180px 180px 180px;
    grid-template-rows:auto;
    gap: 1rem;
    padding: 0.7rem 0.769em 1.15rem;
    width: 100%;
    left: 1%;

    @media only screen and (max-width: 1024px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media only screen and (max-height: 412px){
        margin-top: 7.8rem;
    }

    .loading-failed{
        grid-column-start: 1;
        grid-column-end: 7;
        padding-top: 2rem;
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
`;

export const TabsUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${AppColor.MainTheme2};
    position: sticky;
    height: 6rem;
    width: 100%;
    top: 7.5rem;
    z-index: 99;
    padding: 2rem 5rem 5.5rem 5rem;
    gap: 7rem;

    @media only screen and (max-width: 768px){
        top: 4.9rem;
        gap: 1rem;
    }

    li{
        a{
            display: flex;
            flex-direction:column;
            align-items:center;
            gap: 1rem;
            padding: 0 0.85em;
            text-decoration: none;
        }
    
        span{
            width: 3rem;
            height: 3rem
        }
    
        .home{
            color: ${(props)=>props.$home_label_color};

            span{
                background: url(${(props)=>props.$home_icon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        .new{
            color: ${(props)=>props.$new_label_color};

            span{
                background: url(${(props)=>props.$new_icon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        .slots{
            color: ${(props)=>props.$slots_label_color};

            span{
                background: url(${(props)=>props.$slots_icon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        .table{
            color: ${(props)=>props.$table_label_color};
            
            span{
                background: url(${(props)=>props.$table_icon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        &:hover{
            a{
                color: ${AppColor.GameTabLabelActive};
            }
        
            .home{
                span{
                    background: url(${assetUrl+"/icons/allgames_icon-active.svg"}) no-repeat;
                }
            }

            .new{
                span{
                    background: url(${assetUrl+"/icons/new_icon-active.svg"}) no-repeat;
                }
            }

            .slots{
                span{
                    background: url(${assetUrl+"/icons/slots_icon-active.svg"}) no-repeat;
                }
            }

            .table{
                span{
                    background: url(${assetUrl+"/icons/table_icon-active.svg"}) no-repeat;
                }
            }
        }

    }
`;

export const HamburgerNavDiv = styled.div`
    position: relative;

    @media only screen and (min-width: 768px){
        display:none;
    }

    .hamburgerNavOpen {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        background-color: ${AppColor.MainTheme2};
        min-height: max-content;
        width: 80vw;
        top: 0rem;
        position: absolute;
        opacity: 0.9;
        top: 5rem;
        left: -3rem;
        gap: 1rem;
        padding: 2rem;
        animation: slide-down 200ms;
        z-index: 105;
    
        @keyframes slide-down {
            from {
                transform: translateY(-10%); opacity: 0;
            }
            to {
                transform: translateY(0%); opacity: 1;
            }
        }

        li{
            a{
                display: flex;
                flex-direction:column;
                align-items:center;
                gap: 1rem;
                padding: 0 0.85rem;
                text-decoration: none;
            }
        
            span{
                width: 6rem;
                height: 6rem
            }
        
            .home{
                color: ${(props)=>props.$home_label_color};

                span{
                    background: url(${(props)=>props.$home_icon}) no-repeat;
                }
            }

            .new{
                color: ${(props)=>props.$new_label_color};

                span{
                    background: url(${(props)=>props.$new_icon}) no-repeat;
                }
            }

            .slots{
                color: ${(props)=>props.$slots_label_color};

                span{
                    background: url(${(props)=>props.$slots_icon}) no-repeat;
                }
            }

            .table{
                color: ${(props)=>props.$table_label_color};
                
                span{
                    background: url(${(props)=>props.$table_icon}) no-repeat;
                }
            }

            &:hover{
                a{
                    color: ${AppColor.GameTabLabelActive};
                }
            
                .home{
                    span{
                        background: url(${assetUrl+"/icons/allgames_icon-active.svg"}) no-repeat;
                    }
                }

                .new{
                    span{
                        background: url(${assetUrl+"/icons/new_icon-active.svg"}) no-repeat;
                    }
                }

                .slots{
                    span{
                        background: url(${assetUrl+"/icons/slots_icon-active.svg"}) no-repeat;
                    }
                }

                .table{
                    span{
                        background: url(${assetUrl+"/icons/table_icon-active.svg"}) no-repeat;
                    }
                }
            }
        }
    }

    .hamburgerNavClosed {
        display: none;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        background-color: ${AppColor.MainTheme2};
        min-height: max-content;
        width: 80vw;
        top: 0rem;
        position: absolute;
        opacity: 0.9;
        top: 5rem;
        left: -3rem;
        gap: 1rem;
        padding: 2rem;
        animation: slide-up 200ms;
    
        @keyframes slide-up {
            from { 
                display: flex; 
            }
            to { 
                transform: translateY(-10%); opacity: 0;
            }
        }

        li{
            a{
                display: flex;
                flex-direction:column;
                align-items:center;
                gap: 1rem;
                padding: 0 0.85rem;
                text-decoration: none;
            }
        
            span{
                width: 6rem;
                height: 6rem
            }
        
            .home{
                color: ${(props)=>props.$home_label_color};

                span{
                    background: url(${(props)=>props.$home_icon}) no-repeat;
                }
            }

            .new{
                color: ${(props)=>props.$new_label_color};

                span{
                    background: url(${(props)=>props.$new_icon}) no-repeat;
                }
            }

            .slots{
                color: ${(props)=>props.$slots_label_color};

                span{
                    background: url(${(props)=>props.$slots_icon}) no-repeat;
                }
            }

            .table{
                color: ${(props)=>props.$table_label_color};
                
                span{
                    background: url(${(props)=>props.$table_icon}) no-repeat;
                }
            }

            &:hover{
                a{
                    color: ${AppColor.GameTabLabelActive};
                }
            
                .home{
                    span{
                        background: url(${assetUrl+"/icons/allgames_icon-active.svg"}) no-repeat;
                    }
                }

                .new{
                    span{
                        background: url(${assetUrl+"/icons/new_icon-active.svg"}) no-repeat;
                    }
                }

                .slots{
                    span{
                        background: url(${assetUrl+"/icons/slots_icon-active.svg"}) no-repeat;
                    }
                }

                .table{
                    span{
                        background: url(${assetUrl+"/icons/table_icon-active.svg"}) no-repeat;
                    }
                }
            }
        }
    }

    .hamburgerIcon {
        display: sticky;
        padding-top: 1rem;
        cursor: pointer;

        .hamburger{
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;

            div{
                width: 3rem;
                height: 0.5rem;
                border-radius: 1rem;
                background-color: ${AppColor.GameTabLabel};
            }

            &:hover{
                div{
                    background-color: ${AppColor.GameTabLabelActive};
                }
            }
        }

        .hamburgerX{
            width: 3rem;
            height: 3rem;
            background: url(${assetUrl+"/icons/cross_gold_icon.svg"}) no-repeat;

            div{
                display: none;
            }
        }
    }
`;

export const SearchInputContainer = styled.form`
    width: 13rem;
    position: relative;
    top: 0.7rem;
    left: 1.6rem;
    height: 2rem;

    @media only screen and (max-width: 1024px){
        left: -4rem;
    }

    @media only screen and (max-width: 768px){
        width: 22rem;
        margin-top: 0.4rem;
        height: 3.6rem;
        left: 1.6rem;
    }

    @media only screen and (max-width: 290px){
        left: -4rem;
    }

    .searchIcon{
        background: url(${assetUrl+"/icons/gamesearch_icon.svg"}) 50% 50%/contain no-repeat;
        display: inline-block;
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.36rem;
        margin-left: 0.1rem;
        z-index: 5;
        cursor: pointer;
        font-size: 1rem;

        @media only screen and (max-width: 768px){
            display: none;
        }
    }
`;

export const SearchInput = styled.input`
    color: ${AppColor.InputText};
    background-color: ${AppColor.InputBackground};
    position: absolute;
    font-size: 1rem;
    border: none;
    width: 12.75rem;
    height: 100%;
    padding-left: 1.5rem;

    &:focus{
        outline-width: 0;
    }

    @media only screen and (max-width: 768px){
        font-size: 1.4rem;
        width: 100%;
        height: 60%;
    }

    @media only screen and (max-width: 290px){
        width: 340%;
    }
`;

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

    @media (hover: none) and (pointer: coarse) {
        &:hover{
            img{
                filter: none;
            }

            button{
                display:none;
            }
        }
    }
`;

export const GameThumbNewTag = styled.span`
    background-color: ${AppColor.LoginBtn};
    width: 3rem;
    display: inline-block;
    line-height: 1.7;
    font-size: 0.9rem;
    border-radius: 0.1rem;
    text-transform: capitalize;
    font-weight: 300;
    color: ${AppColor.ButtonText};
    position: absolute;
    text-align: center;
    top: 0.5rem;
    left: 0rem;
    z-index:3;
    opacity: .9;
`;

export const GameThumbBtn = styled.button`
    background-color: ${AppColor.JoinBtn};
    display: none;
    line-height: 1.7;
    font-size: 0.8rem;
    min-width: calc(50% - 0.5rem);
    border-radius: 0.1rem;
    text-transform: uppercase;
    font-weight: 700;
    transition: background-color .15s ease-out;
    color: ${AppColor.ButtonText};
    position: absolute;
    border: 0;
    top: ${(props)=>props.$top};
    left: ${(props)=>props.$left};
    z-index:3;
    cursor: pointer;

    @media only screen and (max-width: 412px) {
        width: 95%;                
        top: ${(props)=>props.$top_small};
        left: ${(props)=>props.$left_small};
    }

    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`;

export const ToTopButton = styled.div`
    background: transparent;

    @media only screen and (max-width: 768px){
        display: none;
    }

    .shown{
        display: inline-block;
        background: url(${assetUrl+"/icons/btop_icon.png"}) 50% 50%/contain no-repeat;
        position: fixed;
        z-index: 100;
        bottom: 3.5rem;
        right: 1rem;
        width: 3.8rem;
        height: 3.8rem;
        cursor: pointer;
        visibility: visible;
        opacity: 1;
        transition: opacity 200ms linear;
    }

    .hidden{
        display: inline-block;
        background: url(${assetUrl+"/icons/btop_icon.png"}) 50% 50%/contain no-repeat;
        position: fixed;
        z-index: 100;
        bottom: 3.5rem;
        right: 1rem;
        width: 3.8rem;
        height: 3.8rem;
        cursor: pointer;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 100ms, opacity 100ms linear;
    }
`;
