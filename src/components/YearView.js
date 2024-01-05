import React from "react";
import "./YearView.css";

const YearView = ({ years, handleYearSelection, selectedYear, handlePrevClick, handleNextClick }) => {
  return (
    <div className="year-view">
      {years.map((year, index) => (
        <div
          key={index}
          onClick={() => handleYearSelection(year)}
          className={`year-button${year === selectedYear ? " selected" : ""} ${index === 0 || index === 11 ? "gray-year" : ""} year-button-flex`}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearView;
