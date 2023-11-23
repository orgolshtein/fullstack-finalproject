import { useContext, useRef } from "react";

import { AppContext } from "../../state/AppContext";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import { PopupDiv } from "../../styles/popups";
import { RegBlockFlexDiv } from "../../styles/popups";

export default function RegistrationBlock () {
    const { 
        isRegBlockDisplayed,
        setIsRegBlockDisplayed
    } = useContext(AppContext);

    const refBlockRef = useRef();

    useImpDisableScrollHandler(isRegBlockDisplayed);

    return (
        <>
        {
        isRegBlockDisplayed ?
        <PopupDiv 
            width="24rem" 
            $z_index="110" 
            $titlebox_height="4rem" 
            onClick={(event) => {
                useOuterClick(event,refBlockRef,setIsRegBlockDisplayed,false)
            }}
        >
            <div className="flexContainer">
                <div className="inner" ref={refBlockRef}>
                    <div className="content">
                        <div className="titlebox">
                            <div>We're sorry...</div>
                        </div>
                        <RegBlockFlexDiv>
                            <div>Registration cannot be made in your region</div>
                        </RegBlockFlexDiv>
                    </div>
                </div>
            </div>
        </PopupDiv> : null
        }
        </>
    );
};
