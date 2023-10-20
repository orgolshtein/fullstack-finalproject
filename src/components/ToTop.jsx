import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../state/AppContext";


export default function ToTop () {
    const { isToTopDisplayed, updateToTopDisplay } = useContext(AppContext);

    const DisplayHandler = () =>{
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            updateToTopDisplay(true);
          }
    };
    
    const ScrollHandler = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {isToTopDisplayed ? <ToTopButton onClick={ScrollHandler} onChange={DisplayHandler}></ToTopButton> : null}
        </>
    );
}


const ToTopButton = styled.div`
    display: inline-block;
    background: url(/src/assets/icons/btop_icon.png) 50% 50%/contain no-repeat;
    position: fixed;
    z-index: 101;
    bottom: 3.5em;
    right: 1em;
    width: 3.8em;
    height: 3.8em;
    cursor: pointer;
`