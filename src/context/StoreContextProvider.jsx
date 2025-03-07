import React from "react";
import { createContext } from "react";
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const context = {
      we:""
  };
  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
