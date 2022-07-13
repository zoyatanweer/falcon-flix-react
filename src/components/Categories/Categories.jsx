import React, { useEffect } from "react";
import { useFilter } from "../../context/FilterContext";
import { categories } from "../../constants/constants";
import "./Categories.css";

const Categories = () => {
  //   const { FilterState, FilterDispatch } = useFilter();

  return (
    <div className="filter-section">
      {/* <ul>
        {categories.map((categories) => {
          return (
            <li
              value={FilterState.categories}
              onClick={(e) =>
                FilterDispatch({
                  type: "CATEGORIES",
                  payload: e,
                })
              }
              className="span-all"
            >
              {categories}
            </li>
          );
        })}
      </ul> */}
      <div className="filter-section">
        <span className="span-all">All</span>
        <span>Trailers</span>
        <span>Bloopers</span>
        <span>Funny</span>
        <span>Interviews</span>
      </div>
    </div>
  );
};

export { Categories };
