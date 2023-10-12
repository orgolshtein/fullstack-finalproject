import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainDark, MainLight } from "../../styles/Colors";
import AllGamesIcon from "../../assets/icons/allgames_icon.svg";
import NewGamesIcon from "../../assets/icons/new_icon.svg";
import SlotsIcon from "../../assets/icons/slots_icon.svg";
import TableGamesIcon from "../../assets/icons/table_icon.svg";


const GameTabs = () => (
<TabsUl>
    <li className="topGames">
        <Link to="/">
        <img src={AllGamesIcon} />
            HOME</Link>
    </li>
    <li className="newGames">
        <Link to="/new">
        <img src={NewGamesIcon} />
            NEW</Link>
    </li>
    <li className="slots">
        <Link to="/slots">

        <img src={SlotsIcon} />
            SLOTS</Link>
    </li>
    <li className="tableGames">
        <Link to="/table">
        <img src={TableGamesIcon} />
            TABLE GAMES</Link>
    </li>
</TabsUl>
);

export default GameTabs;

const TabsUl = styled.ul`
    transform: translate3d(0px, 0px, 0px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${MainLight};
    position: sticky;
    height: 6rem;
    width: 100%;
    top: 7.5rem;
    z-index: 99;
    padding: 2rem 5rem 5.5rem 5rem;
    gap: 10rem;

    a{
        display: flex;
        flex-direction:column;
        align-items:center;
        gap: 1rem;
        padding: 0 0.85em;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${MainDark};
        text-decoration: none;
    }

    a:active, a:hover{
        color: #aea269;
    }

    img{
        width: 3rem;
        height: 3rem
    }
`