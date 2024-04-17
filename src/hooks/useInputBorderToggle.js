import { useState, useEffect } from "react";

export default function useInputBorderToggle(msg, borderColor, borderError) {
    const [inputBorder, setInputBorder] = useState(borderColor);
    
    useEffect(()=>{
        msg.length > 0 ?
        setInputBorder(borderError) :
        setInputBorder(borderColor)
    }, [msg]);

    return inputBorder;
};
