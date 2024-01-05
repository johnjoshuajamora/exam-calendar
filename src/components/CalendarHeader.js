import React from 'react';

const CalendarHeader = ({ isYearView, handlePrevClick, handlePrevYearClick, handleYearClick, handleNextClick, handleNextYearClick, handleMonthClick, currentDay, dateRange, months }) => (
  <div className="calendar-header">
    <div
      className="nav-button"
      {...(!isYearView ? { onClick: handlePrevClick } : { onClick: handlePrevYearClick })}
    >
      {"<"}
    </div>
    <div className="month-text">
      {isYearView ? (
        <h2>
          <span
            className="calendar-year-text"
            onClick={handleYearClick}
          >{`${dateRange}`}</span>
        </h2>
      ) : (
        <h2>
          <span className="calendar-month-text" onClick={handleMonthClick}>
            {months[currentDay.getMonth()]}
          </span>{" "}
          <span className="calendar-year-text" onClick={handleYearClick}>
            {currentDay.getFullYear()}
          </span>
        </h2>
      )}
    </div>
    <div
      className="nav-button"
      {...(!isYearView ? { onClick: handleNextClick } : { onClick: handleNextYearClick })}
    >
      {">"}
    </div>
  </div>
);

export default CalendarHeader;
