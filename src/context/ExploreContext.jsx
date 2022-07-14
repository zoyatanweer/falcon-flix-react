import React from "react";
import { createContext, useContext, useState } from "react";

const ExploreContext = createContext();

const ExploreProvider = ({ children }) => {
  const [explore, setExplore] = useState([]);
  return (
    <ExploreContext.Provider value={{ explore, setExplore }}>
      {children}
    </ExploreContext.Provider>
  );
};

const useExplore = () => useContext(ExploreContext);

export { useExplore, ExploreProvider };
