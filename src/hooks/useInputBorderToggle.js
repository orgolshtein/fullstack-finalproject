import { useEffect } from "react";

export default function useInputBorderToggle(msg, bordersetter, bordererr, border) {
    useEffect(()=>{
        msg.length > 0 ?
        bordersetter(bordererr) :
        bordersetter(border)
    }, [msg]);
};
