import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { Link } from "react-router-dom";
import { HamburgerNavDiv, TabsUl } from "../../styles/ContainersGames";
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
        tableLabelColor,
        isHamburgerNavOpen,
        updateHamburgerNavDisplay
    } = useContext(AppContext);

    const toggleHamburger = () => {
        isHamburgerNavOpen ? 
        updateHamburgerNavDisplay(false) : 
        updateHamburgerNavDisplay(true)
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
                TABLE</Link>
        </li>
        <SearchGame />
    </TabsUl>
    );
};
