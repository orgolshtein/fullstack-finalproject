import { useContext, useRef } from "react";
import { AppContext } from "../../state/AppContext";
import { SearchInputContainer, SearchInput } from "../../styles/inputs";

export default function SearchGame () {
    const { width, gameSearchHandler, setIsGameOverlayDisplayed  } = useContext(AppContext);
    let searchInputTxt = useRef("");

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
                onChange={()=> gameSearchHandler(searchInputTxt)}
            />
        </SearchInputContainer>
    );
};
