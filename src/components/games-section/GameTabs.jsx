import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import SearchGame from "./SearchGame";


export default function GameTabs () {
    const { 
        width,
        homeIcon, 
        newIcon, 
        slotsIcon, 
        tableIcon,
        homeLabelColor,
        newLabelColor, 
        slotsLabelColor, 
        tableLabelColor,
        isHamburgerNavOpen,
        updateHamburgerNavDisplay
    } = useContext(AppContext);

    const toggleHamburger = () =>{
        if (isHamburgerNavOpen){
            updateHamburgerNavDisplay(false);
        } else{
            updateHamburgerNavDisplay(true);
        }
    }

    return (
    <TabsUl 
        $homeIcon={homeIcon} 
        $newIcon={newIcon} 
        $slotsIcon={slotsIcon} 
        $tableIcon={tableIcon}
        $homeLabelColor={homeLabelColor} 
        $newLabelColor={newLabelColor} 
        $slotsLabelColor={slotsLabelColor} 
        $tableLabelColor={tableLabelColor}
    >
        <HamburgerNavDiv
            $homeIcon={homeIcon} 
            $newIcon={newIcon} 
            $slotsIcon={slotsIcon} 
            $tableIcon={tableIcon}
            $homeLabelColor={homeLabelColor} 
            $newLabelColor={newLabelColor} 
            $slotsLabelColor={slotsLabelColor} 
            $tableLabelColor={tableLabelColor}
        >
            <ul className={isHamburgerNavOpen ? "hamburgerOpen" : "hamburgerClosed"}>
                <li>
                    <Link className="homeIcon" to="/">
                    <span />
                        HOME</Link>
                </li>
                <li>
                    <Link className="newIcon" to="/new">
                    <span />
                        NEW</Link>
                </li>
                <li>
                    <Link className="slotsIcon" to="/slots">
                    <span />
                        SLOTS</Link>
                </li>
                <li>
                    <Link className="tableIcon" to="/table">
                    <span />
                        TABLE</Link>
                </li>
            </ul>
            <div className="hamburgerContainer" onClick={toggleHamburger}>
                <div className={isHamburgerNavOpen ? "hamburgerX" : "hamburger"}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </HamburgerNavDiv>
        <li>
            <Link className="homeIcon" to="/">
            <span />
                HOME</Link>
        </li>
        <li>
            <Link className="newIcon" to="/new">
            <span />
                NEW</Link>
        </li>
        <li>
            <Link className="slotsIcon" to="/slots">
            <span />
                SLOTS</Link>
        </li>
        <li>
            <Link className="tableIcon" to="/table">
            <span />
            {width > 1000 ? "TABLE GAMES" : "TABLE"}</Link>
        </li>
        <SearchGame />
    </TabsUl>
    );
};

const TabsUl = styled.ul`
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

const HamburgerNavDiv = styled.div`
    position: relative;

    @media only screen and (min-width: 768px){
        display:none;
    }
    .hamburgerOpen{
        display: inline-flex;
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