import { useContext, useRef } from "react";
import { AppContext } from "../../state/AppContext";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import { PopupDiv } from "../../styles/containersMain";
import { RegBlockDiv } from "../../styles/containersPopUp";

export default function RegistrationBlock () {
    const { 
        isRegBlockDisplayed,
        updateRegBlockDisplay
    } = useContext(AppContext);

    let refBlockRef = useRef();

    isRegBlockDisplayed ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });

    const outsideClickHandler = (event) => {
        useOuterClick(event,refBlockRef,updateRegBlockDisplay,false)
    };

    return (
        <>
        {
        isRegBlockDisplayed ?
        <PopupDiv width="24rem" $zindex="110" $titleboxheight="4rem" onClick={outsideClickHandler}>
            <div className="flexContainer">
                <div className="inner" ref={refBlockRef}>
                    <div className="content">
                        <div className="titlebox">
                            <div>We're sorry...</div>
                        </div>
                        <RegBlockDiv>
                            <div>Registration cannot be made in your region</div>
                        </RegBlockDiv>
                    </div>
                </div>
            </div>
        </PopupDiv> : null
        }
        </>
    );
};
