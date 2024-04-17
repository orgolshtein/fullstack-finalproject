import { useState } from "react";

export default function usePassIconToggle(passVisible, passInvisible){
    const [passInputType, setPassInputType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState(passInvisible);
    
    const toggle = () => {
        passInputType === "password" ? 
            setPassInputType("text") : 
            setPassInputType("password");
        passInputType === "password" ? 
            setPasswordIcon(passVisible) : 
            setPasswordIcon(passInvisible);
    };

    return { passInputType, passwordIcon, toggle };
};