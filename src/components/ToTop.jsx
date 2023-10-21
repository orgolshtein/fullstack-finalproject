import { useContext, useEffect } from "react";
import { AppContext } from "../state/AppContext";
import { ToTopButton } from "../styles/Buttons";


export default function ToTop () {
    const { isToTopDisplayed } = useContext(AppContext);
    
    const ScrollHandler = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <ToTopButton onClick={ScrollHandler}>
            <div className={isToTopDisplayed? "shown" : "hidden"}></div>
        </ToTopButton>
    );
};