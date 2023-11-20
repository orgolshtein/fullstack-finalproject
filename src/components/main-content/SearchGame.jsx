import { useContext, useRef } from "react";

import { AppContext } from "../../state/AppContext";
import { SearchInputContainer, SearchInput } from "../../styles/main.content";

export default function SearchGame () {
    const { width, filterGames, setIsGameOverlayDisplayed  } = useContext(AppContext);
    const searchInputTxt = useRef("");

    return (
        <SearchInputContainer>
            <span className="searchIcon" onClick={()=>{
                searchInputTxt.current.focus();
            }}/>
            <SearchInput 
                type="text"
                autoComplete="on"
                placeholder={width > 500 ? "Search Game" : "Search"}
                ref={searchInputTxt}
                onClick={() => {
                    setIsGameOverlayDisplayed(false);
                }}
                onChange={()=> filterGames(searchInputTxt)}
            />
        </SearchInputContainer>
    );
};
