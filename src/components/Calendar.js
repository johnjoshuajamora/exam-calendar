// Calendar.js
import React, { useState, useEffect } from "react";
import CalendarDays from "./CalendarDays";
import MonthView from "./MonthView";
import YearView from "./YearView";
import CalendarHeader from "./CalendarHeader";
import "./Calendar.css";

import config from '../config/calendar-config';

const Calendar = (props) => {
  const weekdays = config.weekdays;
  const months = config.months;

  const { state, changeCurrentDay } = props;
  const [isMonthView, setIsMonthView] = useState(false);
  const [isYearView, setIsYearView] = useState(false);
  const [years, setYears] = useState(
    Array.from({ length: 12 }, (_, i) => state.currentDay.getFullYear() - 4 + i)
  );
  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    setDateRange(`${years[0]} - ${years[11]}`);
  }, [years]);

  const currentDay =
    state && state.currentDay instanceof Date ? state.currentDay : new Date();

  const handlePrevClick = () => {
    const newDay = new Date(currentDay);
    newDay.setDate(currentDay.getDate() - 1);
    changeCurrentDay(newDay, false);
  };

  const handleNextClick = () => {
    const newDay = new Date(currentDay);
    newDay.setDate(currentDay.getDate() + 1);
    changeCurrentDay(newDay, false);
  };

  const handleMonthClick = () => {
    setIsMonthView(!isMonthView);
    setIsYearView(false);
  };

  const handleYearClick = () => {
    setIsYearView(!isYearView);
    setIsMonthView(false);
  };

  const handleMonthSelection = (month) => {
    const newDay = new Date(currentDay);
    newDay.setMonth(months.indexOf(month));
    changeCurrentDay(newDay, false);
    setIsMonthView(false);
  };

  const handleYearSelection = (year) => {
    const newDay = new Date(currentDay);
    newDay.setFullYear(year);
    changeCurrentDay(newDay, false);
    setIsYearView(false);
  };

  const handlePrevYearClick = () => {
    setYears((prevYears) =>
      Array.from({ length: 12 }, (_, i) => prevYears[0] - 1 - i).reverse()
    );
  };

  const handleNextYearClick = () => {
    setYears((prevYears) =>
      Array.from({ length: 12 }, (_, i) => prevYears[11] + 1 + i)
    );
  };

  return (
    <div className="calendar">
      <CalendarHeader
        isYearView={isYearView}
        handlePrevClick={handlePrevClick}
        handlePrevYearClick={handlePrevYearClick}
        handleYearClick={handleYearClick}
        handleNextClick={handleNextClick}
        handleNextYearClick={handleNextYearClick}
        handleMonthClick={handleMonthClick}
        currentDay={currentDay}
        dateRange={dateRange}
        months={months}
      />
      <div className="calendar-body">
        <div className="table-header">
          {isMonthView || isYearView
            ? ""
            : weekdays.map((weekday, index) => (
                <div key={index} className="weekday">
                  <p>{weekday}</p>
                </div>
              ))}
        </div>
        {isMonthView ? (
          <MonthView
            months={months}
            handleMonthSelection={handleMonthSelection}
            selectedMonth={months[currentDay.getMonth()]}
          />
        ) : isYearView ? (
          <YearView
            years={years}
            handleYearSelection={handleYearSelection}
            selectedYear={currentDay.getFullYear()}
            handlePrevClick={handlePrevYearClick}
            handleNextClick={handleNextYearClick}
          />
        ) : (
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        )}
      </div>
    </div>
  );
};

export default Calendar;
