import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import DatePicker from "./components/DatePicker";

const App = () => {
  const [state, setState] = useState({
    currentDay: new Date(),
    selectedDate: new Date()
  });

  const changeCurrentDay = (newDay, isCloseCalendar) => {
    const clonedNewDay = new Date(newDay);
    clonedNewDay.setHours(0, 0, 0, 0);

    setState((prev) => ({
      ...prev,
      currentDay: clonedNewDay,
      selectedDate: clonedNewDay
    }));
    isCloseCalendar && toggleCalendar();
  };

  const toggleCalendar = () => {
    setState((prev) => ({
      ...prev,
      isCalendarOpen: !prev.isCalendarOpen,
    }));
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      selectedDate: state.currentDay,
    }));
  }, [state.currentDay]);

  return (
    <div>
      <DatePicker
        selectedDate={state.selectedDate}
        openCalendar={toggleCalendar}
      />
      {state.isCalendarOpen && (
        <Calendar
          state={state}
          changeCurrentDay={changeCurrentDay}
        />
      )}
    </div>
  );
};

export default App;
