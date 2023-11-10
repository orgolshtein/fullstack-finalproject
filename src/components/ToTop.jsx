import { useContext } from "react";
import { AppContext } from "../state/AppContext";
import { ToTopButton } from "../styles/buttons";


export default function ToTop () {
    const { isToTopDisplayed } = useContext(AppContext);
    
    const ClickHandler = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <ToTopButton onClick={ClickHandler}>
            <div className={isToTopDisplayed ? "shown" : "hidden"}></div>
        </ToTopButton>
    );
};
