import { useEffect } from "react";

export function useImperativeDisableScroll({ element, disabled }) {
    useEffect(() => {
        if (!element) {
            return
        }

        element.style.overflowY = disabled ? 'hidden' : 'scroll'

        return () => {
            element.style.overflowY = 'scroll'
        }
    }, [disabled])
};

export default function useImpDisableScrollHandler (popupDisplay){
    popupDisplay ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
};
