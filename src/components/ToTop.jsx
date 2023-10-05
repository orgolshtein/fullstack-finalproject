import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../state/AppContext";


export default function ToTop () {
    const { toTopDisplay, updateToTopDisplay } = useContext(AppContext);

    const DisplayHandler = () =>{
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            updateToTopDisplay("inline-block");
          }
    };
    
    const ScrollHandler = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <ToTopButton onClick={ScrollHandler} onChange={DisplayHandler} display={toTopDisplay}></ToTopButton>
    );
}


const ToTopButton = styled.div`
    display: ${(props) => props.display};
    background: url(/src/assets/icons/btop_icon.png) 50% 50%/contain no-repeat;
    position: fixed;
    z-index: 101;
    bottom: 3.5em;
    right: 1em;
    width: 3.8em;
    height: 3.8em;
    cursor: pointer;
`