import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import SearchGame from "./SearchGame";


export default function GameTabs () {
    const { 
        homeIcon, 
        newIcon, 
        slotsIcon, 
        tableIcon,
        homeLabelColor,
        newLabelColor, 
        slotsLabelColor, 
        tableLabelColor
    } = useContext(AppContext);

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
                TABLE GAMES</Link>
        </li>
        <SearchGame />
    </TabsUl>
    );
};


 GameTabs;

const TabsUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${AppColor.MainLight};
    position: sticky;
    height: 6rem;
    width: 100%;
    top: 7.5rem;
    z-index: 99;
    padding: 2rem 5rem 5.5rem 5rem;
    gap: 7rem;

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
    
`