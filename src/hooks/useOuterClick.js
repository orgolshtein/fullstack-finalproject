export default function useOuterClick(event, ref, closeHandler, payload){
    if (ref.current && !ref.current.contains(event.target)){
        closeHandler(payload);
    }
};