import React, { useEffect, useState } from "react";

import * as api from "../api/app.api";
import * as AppColor from "../styles/colors";
import { useOncePostMount } from "../hooks/useOncePostMount";
import { Loader } from "../styles/global";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
  const [width, setWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [sliderList, setSliderList] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [newGamesList, setNewGamesList] = useState([]);
  const [slotsGamesList, setSlotsGamesList] = useState([]);
  const [tableGamesList, setTableGamesList] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});
  const [isSliderLoading, setIsSliderLoading] = useState(true);
  const [areGamesLoading, setAreGamesLoading] = useState(true);
  const [isForgotPassDisplayed, setIsForgotPassDisplayed] = useState(false);
  const [isRegBlockDisplayed, setIsRegBlockDisplayed] = useState(false);
  const [isLoginDisplayed, setIsLoginDisplayed] = useState(false);
  const [isGameOverlayDisplayed, setIsGameOverlayDisplayed] = useState(false);
  const [isToTopDisplayed, setIsToTopDisplayed] = useState(false);
  const [sliderErrorMessage, setSliderErrorMessage] = useState("");
  const [gamesErrorMessage, setGamesErrorMessage] = useState("");
  
  useOncePostMount(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    (async () => {
      try {
        const slider_data = await api.fetchSliderData();
        setSliderList(slider_data);
      } catch {
        setSliderErrorMessage("Connection error: cannot display content");
      } finally {
        setIsSliderLoading(false);
      }
    })();
    (async () => {
      try {
        const home_data = await api.fetchHomeGameData();
        setGamesList(home_data);
        const new_data = await api.fetchNewGameData();
        setNewGamesList(new_data);
        const slots_data = await api.fetchSlotsGameData();
        setSlotsGamesList(slots_data);
        const table_data = await api.fetchTableGameData();
        setTableGamesList(table_data);
      } catch {
        setGamesErrorMessage("Connection error: cannot display games");
      } finally {
        setAreGamesLoading(false);
      }
    })();
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
      scrollY > 265 ?
        setIsToTopDisplayed(true) :
        setIsToTopDisplayed(false)
    });
  },[scrollY]);

  const passIconVisToggle = (passInputType, setPassInputType, setPassIcon, overlayDisplayed) => {
    overlayDisplayed? overlayDisplayed(false): null;
    passInputType === "password" ? 
        setPassInputType("text") : 
        setPassInputType("password");
    passInputType === "password" ? 
        setPassIcon("/src/assets/icons/password_visible_icon.svg") : 
        setPassIcon("/src/assets/icons/password_invisible_icon.svg");
  };

  const openLoginPopup = (overlayDisplayed) => {
    overlayDisplayed? overlayDisplayed(false): null;
    setIsLoginDisplayed(true);
  };

  const onSubmit = ({...submit}) =>{
    submit.displaygameoverlay? submit.displaygameoverlay(false): null;
    submit.msg("");
    submit.msg(<Loader $size={submit.loadersize} $marginleft={submit.loaderleft? submit.loaderleft : null} />);
    submit.inputdisabled(true);
    submit.bgcolor(AppColor.DisbledInputBackground);
    submit.buttonactive(true);
      setTimeout(()=>{
        submit.msg(submit.notfound);
        submit.inputdisabled(false);
        submit.bgcolor(AppColor.InputBackground);
        submit.buttonactive(false);
      }, Math.floor(Math.random() * (5000-1000)+1000));
  };

  const openRegBlockPopup = (ctaActive, overlayDisplayed) => {
    overlayDisplayed? overlayDisplayed(false): null;
    ctaActive(true);
    setTimeout(()=>{
        setIsRegBlockDisplayed(true);
        ctaActive(false);
    }, Math.floor(Math.random() * (2000-1000)+1000));
  };

  const openGameOverlay = (selectedgame) => {
    setIsGameOverlayDisplayed(false);
    setTimeout(()=>{
      setSelectedGame(selectedgame);
      setIsGameOverlayDisplayed(true);
    },200)
  };

  const filterGames = (input) => {
    const searchedGamesList = gamesList.map((item)=>{
        item.show = item.title.toLowerCase().includes(input.current.value.toLowerCase());
        return item;
    });
    setGamesList(searchedGamesList);
    const searchedNewGamesList = newGamesList.map((item)=>{
        item.show = item.title.toLowerCase().includes(input.current.value.toLowerCase());
        return item;
    });
    setNewGamesList(searchedNewGamesList);
    const searchedSlotsGamesList = slotsGamesList.map((item)=>{
        item.show = item.title.toLowerCase().includes(input.current.value.toLowerCase());
        return item;
    });
    setSlotsGamesList(searchedSlotsGamesList);
    const searchedTableGamesList = tableGamesList.map((item)=>{
        item.show = item.title.toLowerCase().includes(input.current.value.toLowerCase());
        return item;
    });
    setTableGamesList(searchedTableGamesList);
};

  const state = {
    width,
    isSliderLoading,
    sliderList,
    areGamesLoading,
    gamesList,
    newGamesList,
    slotsGamesList,
    tableGamesList,
    selectedGame,
    isForgotPassDisplayed,
    isRegBlockDisplayed,
    isLoginDisplayed,
    isGameOverlayDisplayed,
    isToTopDisplayed,
    sliderErrorMessage,
    gamesErrorMessage
  };
  
  const actions = {
    setIsSliderLoading,
    setSliderList,
    passIconVisToggle,
    setAreGamesLoading,
    setGamesList,
    setNewGamesList,
    setSlotsGamesList,
    setTableGamesList,
    setSelectedGame,
    filterGames,
    openGameOverlay,
    setIsForgotPassDisplayed,
    setIsRegBlockDisplayed,
    openRegBlockPopup,
    setIsLoginDisplayed,
    openLoginPopup,
    onSubmit,
    setIsGameOverlayDisplayed,
    setIsToTopDisplayed,
    setSliderErrorMessage,
    setGamesErrorMessage
  };
  
  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
