import { useContext, useRef } from "react";
import { AppContext } from "../../state/AppContext";
import { SearchInputContainer } from "../../styles/Inputs";

export default function SearchGame () {
    const { gamesList, updateGamesList } = useContext(AppContext);
    let searchInputTxt = useRef("");

    const inputTypeHandler = () => {
        const searchedGamesList = gamesList.map((item)=>{
            item.show = item.title.toLowerCase().includes(searchInputTxt.current.value.toLowerCase());
            console.log("Searching: "+searchInputTxt.current.value);
            return item;
        });
        updateGamesList(searchedGamesList);
    }

    return (
        <SearchInputContainer>
            <span className="searchIcon"/>
            <input 
                type="text" 
                placeholder="Search Game"
                ref={searchInputTxt} 
                onChange={inputTypeHandler}
            />
        </SearchInputContainer>
    );
};