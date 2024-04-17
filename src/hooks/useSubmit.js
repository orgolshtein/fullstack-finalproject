import { useState } from "react";

export default function useSubmit(inputBackground, disabledInputBackground, loader, notFound){
    const [submitErrMsg, setSubmitErrMsg] = useState("");
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(inputBackground);
    const [isBtnActive, setIsBtnActive] = useState(false);
    const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);

    const onSubmit = () => {
        setSubmitErrMsg("");
        setSubmitErrMsg(loader);
        setIsInputDisabled(true);
        setInputBackgroundColor(disabledInputBackground);
        setIsBtnActive(true);
          setTimeout(()=>{
            setSubmitErrMsg(notFound);
            setIsInputDisabled(false);
            setInputBackgroundColor(inputBackground);
            setIsBtnActive(false);
          }, Math.floor(Math.random() * (5000-1000)+1000));
    };

    return { 
        submitErrMsg, 
        setSubmitErrMsg, 
        isInputDisabled, 
        inputBackgroundColor, 
        isBtnActive, 
        isJoinBtnActive,
        setIsJoinBtnActive,
        onSubmit 
    }
};
