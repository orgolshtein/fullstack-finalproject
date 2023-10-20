import React, { useState } from "react";
import slider_data from "../data/slider-data.json"
import games_data from "../data/games-data.json";
import * as AppColor from "../styles/Colors"

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
  const [sliderList, setSliderList] = useState([]);  
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPasswordDisplay, setforgotPasswordDisplay] = useState("none");
  const [regBlockDisplay, setRegBlockDisplay] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("none");
  const [homeIcon, setHomeIcon] = useState("src/assets/icons/allgames_icon.svg");
  const [newIcon, setNewIcon] = useState("src/assets/icons/new_icon.svg");
  const [slotsIcon, setSlotsIcon] = useState("src/assets/icons/slots_icon.svg");
  const [tableIcon, setTableIcon] = useState("src/assets/icons/table_icon.svg");
  const [homeLabelColor, setHomeLabelColor] = useState(AppColor.GameTabLabel);
  const [newLabelColor, setNewLabelColor] = useState(AppColor.GameTabLabel);
  const [slotsLabelColor, setSlotsLabelColor] = useState(AppColor.GameTabLabel);
  const [tableLabelColor, setTableLabelColor] = useState(AppColor.GameTabLabel);
  const [selectedGame, setSelectedGame] = useState({});
  const [isGameOverlay, setIsGameOverlay] = useState(false);
  const [toTopDisplay, setToTopDisplay] = useState("none");

  const getSliderList = ()=>{
    const datalist = slider_data.map((item)=>({...item, show: true}));
    setSliderList(datalist);
  }
  
  const getGamesList = ()=>{
    const datalist = games_data.map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const getNewGamesList = ()=>{
    const datalist = games_data.filter((item) => item.new === true).map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const getSlotGamesList = ()=>{
    const datalist = games_data.filter((item) => item.type === "slot").map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const getTableGamesList = ()=>{
    const datalist = games_data.filter((item) => item.type === "table").map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const updateGamesList = (x)=>{
    setGamesList(x);
  };

  const loadingIsFinished = () => {
    setIsLoading(false);
  };
  
  const fetchErrorHandler = () => {
    setErrorMessage("Cannot connect");
  };

  const updateforgotPasswordDisplay = (x) => {
    setforgotPasswordDisplay(x);
  };

  const updateRegBlockDisplay = (x) => {
    setRegBlockDisplay(x);
  };

  const updateLoginDisplay = (x) => {
    setLoginDisplay(x);
  };

  const homeActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon-active.svg");
    setNewIcon("src/assets/icons/new_icon.svg");
    setSlotsIcon("src/assets/icons/slots_icon.svg");
    setTableIcon("src/assets/icons/table_icon.svg");
    setHomeLabelColor(AppColor.GameTabLabelActive);
    setNewLabelColor(AppColor.GameTabLabel);
    setSlotsLabelColor(AppColor.GameTabLabel);
    setTableLabelColor(AppColor.GameTabLabel);
  };

  const newActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon.svg");
    setNewIcon("src/assets/icons/new_icon-active.svg");
    setSlotsIcon("src/assets/icons/slots_icon.svg");
    setTableIcon("src/assets/icons/table_icon.svg");
    setHomeLabelColor(AppColor.GameTabLabel);
    setNewLabelColor(AppColor.GameTabLabelActive);
    setSlotsLabelColor(AppColor.GameTabLabel);
    setTableLabelColor(AppColor.GameTabLabel);
  };

  const slotsActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon.svg");
    setNewIcon("src/assets/icons/new_icon.svg");
    setSlotsIcon("src/assets/icons/slots_icon-active.svg");
    setTableIcon("src/assets/icons/table_icon.svg");
    setHomeLabelColor(AppColor.GameTabLabel);
    setNewLabelColor(AppColor.GameTabLabel);
    setSlotsLabelColor(AppColor.GameTabLabelActive);
    setTableLabelColor(AppColor.GameTabLabel);
  };

  const tableActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon.svg");
    setNewIcon("src/assets/icons/new_icon.svg");
    setSlotsIcon("src/assets/icons/slots_icon.svg");
    setTableIcon("src/assets/icons/table_icon-active.svg");
    setHomeLabelColor(AppColor.GameTabLabel);
    setNewLabelColor(AppColor.GameTabLabel);
    setSlotsLabelColor(AppColor.GameTabLabel);
    setTableLabelColor(AppColor.GameTabLabelActive);
  };

  const updateSelectedGame = (x) => {
    setSelectedGame(x);
  };

  const updateGameOverlayDisplay = (x) => {
    setIsGameOverlay(x);
  }

  const updateToTopDisplay = (x) => {
    setToTopDisplay(x);
  };

  const state = {
    sliderList,
    gamesList,
    isLoading,
    errorMessage,
    forgotPasswordDisplay,
    regBlockDisplay,
    loginDisplay,
    homeIcon,
    newIcon,
    slotsIcon,
    tableIcon,
    homeLabelColor,
    newLabelColor,
    slotsLabelColor,
    tableLabelColor,
    selectedGame,
    isGameOverlay,
    toTopDisplay
  };

  const actions = {
    getSliderList,
    getGamesList,
    getNewGamesList,
    getSlotGamesList,
    getTableGamesList,
    updateGamesList,
    fetchErrorHandler,
    loadingIsFinished,
    updateforgotPasswordDisplay,
    updateRegBlockDisplay,
    updateLoginDisplay,
    homeActive,
    newActive,
    slotsActive,
    tableActive,
    updateSelectedGame,
    updateGameOverlayDisplay,
    updateToTopDisplay
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
