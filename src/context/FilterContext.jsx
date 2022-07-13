import React from "react";
import { createContext, useContext, useState, useReducer } from "react";

const FilterContext = createContext();

const initialData = {
  categories: [],
  category: "All",
};

const FilterProvider = ({ children }) => {
  const [FilterState, FilterDispatch] = useReducer(
    filterReducerFunc,
    initialData
  );
  return (
    <FilterContext.Provider value={{ FilterState, FilterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };

const filterReducerFunc = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
