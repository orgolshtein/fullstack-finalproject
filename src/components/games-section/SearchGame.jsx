import { useContext, useRef } from "react";
import { AppContext } from "../../state/AppContext";
import { SearchInputContainer, SearchInput } from "../../styles/inputs";

export default function SearchGame () {
    const { width, gamesList, updateGamesList, updateGameOverlayDisplay } = useContext(AppContext);
    let searchInputTxt = useRef("");

    const inputClickHandler = () => {
        updateGameOverlayDisplay(false);
    }
    
    const inputTypeHandler = () => {
        const searchedGamesList = gamesList.map((item)=>{
            item.show = item.title.toLowerCase().includes(searchInputTxt.current.value.toLowerCase());
            return item;
        });
        updateGamesList(searchedGamesList);
    }

    return (
        <SearchInputContainer>
            <span className="searchIcon" onClick={()=>{
                searchInputTxt.current.focus();
            }}/>
            <SearchInput 
                type="text" 
                placeholder={width > 500 ? "Search Game" : "Search"}
                ref={searchInputTxt}
                onClick={inputClickHandler}
                onChange={inputTypeHandler}
            />
        </SearchInputContainer>
    );
};
