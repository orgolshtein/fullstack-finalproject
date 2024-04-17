import { useState, useEffect } from "react";

import * as AppColor from "../styles/colors";

export default function useInputBorderToggle(msg) {
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    
    useEffect(()=>{
        msg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    }, [msg]);

    return inputBorder;
};
