import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { assetUrl } from "../../api/app.api";
import * as AppColor from "../../styles/colors"
import { HamburgerNavDiv, TabsUl } from "../../styles/main.content";
import SearchGame from "./SearchGame";

export default function GameTabs () {
    const [homeIcon, setHomeIcon] = useState(`${assetUrl}/icons/allgames_icon.svg`);
    const [newIcon, setNewIcon] = useState(`${assetUrl}/icons/new_icon.svg`);
    const [slotsIcon, setSlotsIcon] = useState(`${assetUrl}/icons/slots_icon.svg`);
    const [tableIcon, setTableIcon] = useState(`${assetUrl}/icons/table_icon.svg`);
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
        setHomeIcon(`${assetUrl}/icons/allgames_icon-active.svg`);
        setNewIcon(`${assetUrl}/icons/new_icon.svg`);
        setSlotsIcon(`${assetUrl}/icons/slots_icon.svg`);
        setTableIcon(`${assetUrl}/icons/table_icon.svg`);
        setHomeLabelColor(AppColor.GameTabLabelActive);
        setNewLabelColor(AppColor.GameTabLabel);
        setSlotsLabelColor(AppColor.GameTabLabel);
        setTableLabelColor(AppColor.GameTabLabel);
        setIsHamburgerNavOpen(false);
    };

    const newSetActive = () => {
        setHomeIcon(`${assetUrl}/icons/allgames_icon.svg`);
        setNewIcon(`${assetUrl}/icons/new_icon-active.svg`);
        setSlotsIcon(`${assetUrl}/icons/slots_icon.svg`);
        setTableIcon(`${assetUrl}/icons/table_icon.svg`);
        setHomeLabelColor(AppColor.GameTabLabel);
        setNewLabelColor(AppColor.GameTabLabelActive);
        setSlotsLabelColor(AppColor.GameTabLabel);
        setTableLabelColor(AppColor.GameTabLabel);
        setIsHamburgerNavOpen(false);
    };

    const slotsSetActive = () => {
        setHomeIcon(`${assetUrl}/icons/allgames_icon.svg`);
        setNewIcon(`${assetUrl}/icons/new_icon.svg`);
        setSlotsIcon(`${assetUrl}/icons/slots_icon-active.svg`);
        setTableIcon(`${assetUrl}/icons/table_icon.svg`);
        setHomeLabelColor(AppColor.GameTabLabel);
        setNewLabelColor(AppColor.GameTabLabel);
        setSlotsLabelColor(AppColor.GameTabLabelActive);
        setTableLabelColor(AppColor.GameTabLabel);
        setIsHamburgerNavOpen(false);
    };

    const tableSetActive = () => {
        setHomeIcon(`${assetUrl}/icons/allgames_icon.svg`);
        setNewIcon(`${assetUrl}/icons/new_icon.svg`);
        setSlotsIcon(`${assetUrl}/icons/slots_icon.svg`);
        setTableIcon(`${assetUrl}/icons/table_icon-active.svg`);
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
        $home_icon={homeIcon} 
        $new_icon={newIcon} 
        $slots_icon={slotsIcon} 
        $table_icon={tableIcon}
        $home_label_color={homeLabelColor} 
        $new_label_color={newLabelColor} 
        $slots_label_color={slotsLabelColor} 
        $table_label_color={tableLabelColor}
    >
        <HamburgerNavDiv
            $home_icon={homeIcon} 
            $new_icon={newIcon} 
            $slots_icon={slotsIcon} 
            $table_icon={tableIcon}
            $home_label_color={homeLabelColor} 
            $new_label_color={newLabelColor} 
            $slots_label_color={slotsLabelColor} 
            $table_label_color={tableLabelColor}
        >
            <ul className={isHamburgerNavOpen ? "hamburgerNavOpen" : "hamburgerNavClosed"}>
                <li>
                    <Link className="home" to="/">
                    <span />
                        HOME</Link>
                </li>
                <li>
                    <Link className="new" to="/new">
                    <span />
                        NEW</Link>
                </li>
                <li>
                    <Link className="slots" to="/slots">
                    <span />
                        SLOTS</Link>
                </li>
                <li>
                    <Link className="table" to="/table">
                    <span />
                        TABLE</Link>
                </li>
            </ul>
            <div className="hamburgerIcon" onClick={toggleHamburger}>
                <div className={isHamburgerNavOpen ? "hamburgerX" : "hamburger"}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </HamburgerNavDiv>
        <li>
            <Link className="home" to="/">
            <span />
                HOME</Link>
        </li>
        <li>
            <Link className="new" to="/new">
            <span />
                NEW</Link>
        </li>
        <li>
            <Link className="slots" to="/slots">
            <span />
                SLOTS</Link>
        </li>
        <li>
            <Link className="table" to="/table">
            <span />
                TABLE</Link>
        </li>
        <SearchGame />
    </TabsUl>
    );
};
