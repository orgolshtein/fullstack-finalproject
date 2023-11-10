import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HamburgerNavDiv, TabsUl } from "../../styles/containersGames";
import * as AppColor from "../../styles/colors"
import SearchGame from "./SearchGame";

export default function GameTabs () {
    const [homeIcon, setHomeIcon] = useState("src/assets/icons/allgames_icon.svg");
    const [newIcon, setNewIcon] = useState("src/assets/icons/new_icon.svg");
    const [slotsIcon, setSlotsIcon] = useState("src/assets/icons/slots_icon.svg");
    const [tableIcon, setTableIcon] = useState("src/assets/icons/table_icon.svg");
    const [homeLabelColor, setHomeLabelColor] = useState(AppColor.GameTabLabel);
    const [newLabelColor, setNewLabelColor] = useState(AppColor.GameTabLabel);
    const [slotsLabelColor, setSlotsLabelColor] = useState(AppColor.GameTabLabel);
    const [tableLabelColor, setTableLabelColor] = useState(AppColor.GameTabLabel);
    const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);
    const location = useLocation();
    
    const toggleHamburger = () => {
        isHamburgerNavOpen ? 
        setIsHamburgerNavOpen(false) : 
        setIsHamburgerNavOpen(true)
    }
    
    const homeSetActive = () => {
        setHomeIcon("src/assets/icons/allgames_icon-active.svg");
        setNewIcon("src/assets/icons/new_icon.svg");
        setSlotsIcon("src/assets/icons/slots_icon.svg");
        setTableIcon("src/assets/icons/table_icon.svg");
        setHomeLabelColor(AppColor.GameTabLabelActive);
        setNewLabelColor(AppColor.GameTabLabel);
        setSlotsLabelColor(AppColor.GameTabLabel);
        setTableLabelColor(AppColor.GameTabLabel);
        setIsHamburgerNavOpen(false);
    };

    const newSetActive = () => {
        setHomeIcon("src/assets/icons/allgames_icon.svg");
        setNewIcon("src/assets/icons/new_icon-active.svg");
        setSlotsIcon("src/assets/icons/slots_icon.svg");
        setTableIcon("src/assets/icons/table_icon.svg");
        setHomeLabelColor(AppColor.GameTabLabel);
        setNewLabelColor(AppColor.GameTabLabelActive);
        setSlotsLabelColor(AppColor.GameTabLabel);
        setTableLabelColor(AppColor.GameTabLabel);
        setIsHamburgerNavOpen(false);
    };

    const slotsSetActive = () => {
        setHomeIcon("src/assets/icons/allgames_icon.svg");
        setNewIcon("src/assets/icons/new_icon.svg");
        setSlotsIcon("src/assets/icons/slots_icon-active.svg");
        setTableIcon("src/assets/icons/table_icon.svg");
        setHomeLabelColor(AppColor.GameTabLabel);
        setNewLabelColor(AppColor.GameTabLabel);
        setSlotsLabelColor(AppColor.GameTabLabelActive);
        setTableLabelColor(AppColor.GameTabLabel);
        setIsHamburgerNavOpen(false);
    };

    const tableSetActive = () => {
        setHomeIcon("src/assets/icons/allgames_icon.svg");
        setNewIcon("src/assets/icons/new_icon.svg");
        setSlotsIcon("src/assets/icons/slots_icon.svg");
        setTableIcon("src/assets/icons/table_icon-active.svg");
        setHomeLabelColor(AppColor.GameTabLabel);
        setNewLabelColor(AppColor.GameTabLabel);
        setSlotsLabelColor(AppColor.GameTabLabel);
        setTableLabelColor(AppColor.GameTabLabelActive);
        setIsHamburgerNavOpen(false);
    };

    useEffect(()=>{
        switch (location.pathname) {
            case "/":
                homeSetActive();
                break;
            case "/home":
                homeSetActive();
                break;
            case "/new":
                newSetActive();
                break;
            case "/slots":
                slotsSetActive();
                break;
            case "/table":
                tableSetActive();
                break;
        }
    },[location.pathname]);

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
