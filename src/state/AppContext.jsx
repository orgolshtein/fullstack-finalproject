import React, { useState } from "react";
import slider_data from "../data/slider-data.json"
import games_data from "../data/games-data.json";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
  const [sliderList, setSliderList] = useState([]);  
  const [gamesList, setGamesList] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPasswordDisplay, setforgotPasswordDisplay] = useState("none");
  const [regBlockDisplay, setRegBlockDisplay] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("none");
  const [toTopDisplay, setToTopDisplay] = useState("none");

  const getSliderList = ()=>{
    const datalist = slider_data.map((item)=>({...item, show: true}));
    setSliderList(datalist);
  }
  
  const getGamesList = ()=>{
    const datalist = games_data.map((item)=>({...item, show: true}));
    setGamesList(datalist);
    console.log(datalist);
  };

  const getNewGamesList = ()=>{
    const datalist = games_data.filter((item) => item.new === true).map((item)=>({...item, show: true}));
    setGamesList(datalist);
    console.log(datalist);
  };

  const getSlotGamesList = ()=>{
    const datalist = games_data.filter((item) => item.type === "slot").map((item)=>({...item, show: true}));
    setGamesList(datalist);
    console.log(datalist);
  };

  const getTableGamesList = ()=>{
    const datalist = games_data.filter((item) => item.type === "table").map((item)=>({...item, show: true}));
    setGamesList(datalist);
    console.log(datalist);
  };

  const updateGamesList = (x)=>{
    setGamesList(x);
    console.log(x);
  };

  const loadingIsFinished = () => {
    setLoadingStatus(false);
    console.log("Loaded");
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

  const updateToTopDisplay = (x) => {
    setToTopDisplay(x);
  };

  const state = {
    sliderList,
    gamesList,
    loadingStatus,
    errorMessage,
    forgotPasswordDisplay,
    regBlockDisplay,
    loginDisplay,
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
    updateToTopDisplay
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
