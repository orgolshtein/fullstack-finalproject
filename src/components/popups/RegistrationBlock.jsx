import { useContext, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../../state/AppContext";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import { PopupDiv } from "../../styles/Containers";

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
        if (refBlockRef.current && !refBlockRef.current.contains(event.target)){
            updateRegBlockDisplay(false);
        }
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
}


const RegBlockDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: block;
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }
`;