import { useEffect, useRef } from "react";

export function useOncePostMount(callback) {
  const loadOnce = useRef(callback);

  useEffect(() => {
    loadOnce.current();
  }, []);
};