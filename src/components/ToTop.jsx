import { useContext } from "react";
import { AppContext } from "../state/AppContext";
import { ToTopButton } from "../styles/buttons";


export default function ToTop () {
    const { isToTopDisplayed } = useContext(AppContext);
    
    return (
        <ToTopButton onClick={()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
            <div className={isToTopDisplayed ? "shown" : "hidden"}></div>
        </ToTopButton>
    );
};
