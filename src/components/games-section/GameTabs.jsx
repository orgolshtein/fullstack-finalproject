import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import AllGamesIcon from "../../assets/icons/allgames_icon.svg";
import NewGamesIcon from "../../assets/icons/new_icon.svg";
import SlotsIcon from "../../assets/icons/slots_icon.svg";
import TableGamesIcon from "../../assets/icons/table_icon.svg";
import SearchGame from "./SearchGame";


const GameTabs = () => (
<TabsUl>
    <li>
        <Link to="/">
        <img src={AllGamesIcon} />
            HOME</Link>
    </li>
    <li>
        <Link to="/new">
        <img src={NewGamesIcon} />
            NEW</Link>
    </li>
    <li>
        <Link to="/slots">
        <img src={SlotsIcon} />
            SLOTS</Link>
    </li>
    <li>
        <Link to="/table">
        <img src={TableGamesIcon} />
            TABLE GAMES</Link>
    </li>
    <SearchGame />
</TabsUl>
);

export default GameTabs;

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

    a{
        display: flex;
        flex-direction:column;
        align-items:center;
        gap: 1rem;
        padding: 0 0.85em;
        color: ${AppColor.GameTabLabel};
        text-decoration: none;
        
        &:hover{
            color: ${AppColor.GameTabLabelActive};
        }
    }


    img{
        width: 3rem;
        height: 3rem
    }
`