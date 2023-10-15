import { useContext, useRef } from "react";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import { AppContext } from "../../state/AppContext";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import { PopupDiv } from "../../styles/Containers";

export default function RegistrationBlock () {
    const { 
        regBlockDisplay
    } = useContext(AppContext);

    regBlockDisplay === "flex" ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });

    return (
        <PopupDiv display={regBlockDisplay} width="24rem" $zindex="110" $titleboxheight="4rem">
            <div className="flexContainer">
                <div className="inner">
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
        </PopupDiv>
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