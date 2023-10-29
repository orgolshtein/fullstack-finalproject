import { useContext, useRef } from "react";
import { AppContext } from "../../state/AppContext";
import { SearchInputContainer, SearchInput } from "../../styles/Inputs";

export default function SearchGame () {
    const { gamesList, updateGamesList, updateGameOverlayDisplay } = useContext(AppContext);
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
                placeholder="Search Game"
                ref={searchInputTxt}
                onClick={inputClickHandler}
                onChange={inputTypeHandler}
            />
        </SearchInputContainer>
    );
};