import styled from "styled-components";
import * as AppColor from "./colors";

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 87.5rem;
    background: ${AppColor.MainTheme2};
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    
    @media only screen and (max-width: 1024px){
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

    @media only screen and (max-width: 1024px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        left: 1%;
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
`

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
    
        .homeIcon{
            color: ${(props)=>props.$homeLabelColor};

            span{
                background: url(${(props)=>props.$homeIcon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        .newIcon{
            color: ${(props)=>props.$newLabelColor};

            span{
                background: url(${(props)=>props.$newIcon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        .slotsIcon{
            color: ${(props)=>props.$slotsLabelColor};

            span{
                background: url(${(props)=>props.$slotsIcon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        .tableIcon{
            color: ${(props)=>props.$tableLabelColor};
            
            span{
                background: url(${(props)=>props.$tableIcon}) no-repeat;
            }

            @media only screen and (max-width: 768px){
                display:none;
            }
        }

        &:hover{
            a{
                color: ${AppColor.GameTabLabelActive};
            }
        
            .homeIcon{
                span{
                    background: url("src/assets/icons/allgames_icon-active.svg") no-repeat;
                }
            }

            .newIcon{
                span{
                    background: url("src/assets/icons/new_icon-active.svg") no-repeat;
                }
            }

            .slotsIcon{
                span{
                    background: url("src/assets/icons/slots_icon-active.svg") no-repeat;
                }
            }

            .tableIcon{
                span{
                    background: url("src/assets/icons/table_icon-active.svg") no-repeat;
                }
            }
        }

    }
`

export const HamburgerNavDiv = styled.div`
    position: relative;

    @media only screen and (min-width: 768px){
        display:none;
    }
    .hamburgerOpen{
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
                padding: 0 0.85em;
                text-decoration: none;
            }
        
            span{
                width: 6rem;
                height: 6rem
            }
        
            .homeIcon{
                color: ${(props)=>props.$homeLabelColor};

                span{
                    background: url(${(props)=>props.$homeIcon}) no-repeat;
                }
            }

            .newIcon{
                color: ${(props)=>props.$newLabelColor};

                span{
                    background: url(${(props)=>props.$newIcon}) no-repeat;
                }
            }

            .slotsIcon{
                color: ${(props)=>props.$slotsLabelColor};

                span{
                    background: url(${(props)=>props.$slotsIcon}) no-repeat;
                }
            }

            .tableIcon{
                color: ${(props)=>props.$tableLabelColor};
                
                span{
                    background: url(${(props)=>props.$tableIcon}) no-repeat;
                }
            }

            &:hover{
                a{
                    color: ${AppColor.GameTabLabelActive};
                }
            
                .homeIcon{
                    span{
                        background: url("src/assets/icons/allgames_icon-active.svg") no-repeat;
                    }
                }

                .newIcon{
                    span{
                        background: url("src/assets/icons/new_icon-active.svg") no-repeat;
                    }
                }

                .slotsIcon{
                    span{
                        background: url("src/assets/icons/slots_icon-active.svg") no-repeat;
                    }
                }

                .tableIcon{
                    span{
                        background: url("src/assets/icons/table_icon-active.svg") no-repeat;
                    }
                }
            }
        }
    }

    .hamburgerClosed{
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
                padding: 0 0.85em;
                text-decoration: none;
            }
        
            span{
                width: 6rem;
                height: 6rem
            }
        
            .homeIcon{
                color: ${(props)=>props.$homeLabelColor};

                span{
                    background: url(${(props)=>props.$homeIcon}) no-repeat;
                }
            }

            .newIcon{
                color: ${(props)=>props.$newLabelColor};

                span{
                    background: url(${(props)=>props.$newIcon}) no-repeat;
                }
            }

            .slotsIcon{
                color: ${(props)=>props.$slotsLabelColor};

                span{
                    background: url(${(props)=>props.$slotsIcon}) no-repeat;
                }
            }

            .tableIcon{
                color: ${(props)=>props.$tableLabelColor};
                
                span{
                    background: url(${(props)=>props.$tableIcon}) no-repeat;
                }
            }

            &:hover{
                a{
                    color: ${AppColor.GameTabLabelActive};
                }
            
                .homeIcon{
                    span{
                        background: url("src/assets/icons/allgames_icon-active.svg") no-repeat;
                    }
                }

                .newIcon{
                    span{
                        background: url("src/assets/icons/new_icon-active.svg") no-repeat;
                    }
                }

                .slotsIcon{
                    span{
                        background: url("src/assets/icons/slots_icon-active.svg") no-repeat;
                    }
                }

                .tableIcon{
                    span{
                        background: url("src/assets/icons/table_icon-active.svg") no-repeat;
                    }
                }
            }
        }
    }

    .hamburgerContainer{
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
                border-radius: 10px;
                background-color: ${AppColor.GameTabLabel};
                transform-origin: 1px;
                transition: all .15s ease-out;
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
            background: url("src/assets/icons/cross_gold_icon.svg") no-repeat;

            div{
                display: none;
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
