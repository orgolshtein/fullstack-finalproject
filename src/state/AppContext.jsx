import React, { useState } from "react";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
  const [width, setWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [gamesList, setGamesList] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});
  const [areGamesLoading, setAreGamesLoading] = useState(true);
  const [isForgotPassDisplayed, setIsforgotPassDisplayed] = useState(false);
  const [isRegBlockDisplayed, setIsRegBlockDisplayed] = useState(false);
  const [isLoginDisplayed, setIsLoginDisplayed] = useState(false);
  const [isGameOverlayDisplayed, setIsGameOverlayDisplayed] = useState(false);
  const [isToTopDisplayed, setIsToTopDisplayed] = useState(false);
  const [gamesErrorMessage, setGamesErrorMessage] = useState("");

  const updateWidth = (x)=>{
    setWidth(x)
  };

  const updateScrollY = (x)=>{
    setScrollY(x);
  };

  const updateGamesList = (x)=>{
    setGamesList(x);
  };

  const updateSelectedGame = (x) => {
    setSelectedGame(x);
  };

  const gamesLoadingFinish = () => {
    setAreGamesLoading(false);
  };

  const updateforgotPasswordDisplay = (x) => {
    setIsforgotPassDisplayed(x);
  };

  const updateRegBlockDisplay = (x) => {
    setIsRegBlockDisplayed(x);
  };

  const updateLoginDisplay = (x) => {
    setIsLoginDisplayed(x);
  };

  const updateGameOverlayDisplay = (x) => {
    setIsGameOverlayDisplayed(x);
  }

  const updateToTopDisplay = (x) => {
    setIsToTopDisplayed(x);
  };

  const fetchGamesError = (x) => {
    setGamesErrorMessage(`Connection error: ${x}`);
  };

  const state = {
    width,
    scrollY,
    gamesList,
    selectedGame,
    areGamesLoading,
    isForgotPassDisplayed,
    isRegBlockDisplayed,
    isLoginDisplayed,
    isGameOverlayDisplayed,
    isToTopDisplayed,
    gamesErrorMessage
  };
  
  const actions = {
    updateWidth,
    updateScrollY,
    updateGamesList,
    updateSelectedGame,
    gamesLoadingFinish,
    updateforgotPasswordDisplay,
    updateRegBlockDisplay,
    updateLoginDisplay,
    updateGameOverlayDisplay,
    updateToTopDisplay,
    fetchGamesError
  };
  
  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
