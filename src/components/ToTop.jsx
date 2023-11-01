import { useContext } from "react";
import { AppContext } from "../state/AppContext";
import { ToTopButton } from "../styles/Buttons";


export default function ToTop () {
    const { width, isToTopDisplayed } = useContext(AppContext);
    
    const ClickHandler = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
        {
            width > 768 ?
            <ToTopButton onClick={ClickHandler}>
                <div className={isToTopDisplayed? "shown" : "hidden"}></div>
            </ToTopButton> : null
        }
        </>
    );
};