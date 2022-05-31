import { useCallback } from "react";

const useLocalStorage = () => {
  const setItem = (key: string, value: object | string): void => {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    const encodeData = btoa(data);

    localStorage.setItem(key, encodeData);
  };

  const getItem = useCallback((key: string): any => {
    const data: any = localStorage.getItem(key);
    if (data) {
      const decodeData = atob(data);
      try {
        return JSON.parse(decodeData);
      } catch {
        return decodeData || null;
      }
    }
    return null;
  }, []);

  const removeItem = useCallback((key: string): void => {
    localStorage.removeItem(key);
  }, []);

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
