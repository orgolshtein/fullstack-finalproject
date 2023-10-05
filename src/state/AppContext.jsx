import React, { useState } from "react";
import games_data from "../data/games-data.json";
// const games_data = await import("../data/games-data.json")

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
    const [gamesList, setGamesList] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [toTopDisplay, setToTopDisplay] = useState("none");

    const getGamesList = ()=>{
        const datalist = games_data.map((item)=>({...item}));
        setGamesList(datalist);
        console.log(datalist);
    };

    const getNewGamesList = ()=>{
        const datalist = games_data.filter((item) => item.new === true).map((item)=>({...item}));
        setGamesList(datalist);
        console.log(datalist);
    };

    const getSlotGamesList = ()=>{
        const datalist = games_data.filter((item) => item.type === "slot").map((item)=>({...item}));
        setGamesList(datalist);
        console.log(datalist);
    };

    const getTableGamesList = ()=>{
        const datalist = games_data.filter((item) => item.type === "table").map((item)=>({...item}));
        setGamesList(datalist);
        console.log(datalist);
    };

    const updateGamesList = (x)=>{
        setGamesList(x);
        console.log(datalist);
    };

    const loadingIsFinished = () => {
        setLoadingStatus(false);
        console.log("Loaded");
      };
    
      const fetchErrorHandler = () => {
        setErrorMessage("Cannot connect");
      };

      const updateToTopDisplay = (x) => {
        setToTopDisplay(x);
      };

    const state = {
        gamesList,
        loadingStatus,
        errorMessage,
        toTopDisplay
    };

    const actions = {
        getGamesList,
        getNewGamesList,
        getSlotGamesList,
        getTableGamesList,
        updateGamesList,
        fetchErrorHandler,
        loadingIsFinished,
        updateToTopDisplay
    };

    return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
