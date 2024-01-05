import React from "react";

import "./DatePicker.css";

const DatePicker = ({ selectedDate, openCalendar }) => {
  const formattedDate = selectedDate instanceof Date ? selectedDate : new Date(selectedDate);
  formattedDate.setHours(0, 0, 0, 0);
  const year = formattedDate.getFullYear();
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const day = String(formattedDate.getDate()).padStart(2, '0');

  const isoFormattedDate = `${year}-${month}-${day}`;

  return (
    <div className="date-picker-input" onClick={openCalendar}>
      <input
        type="text"
        value={isoFormattedDate}
        readOnly
      />
      <div className="calendar-icon" onClick={openCalendar}>
        📅
      </div>
    </div>
  );
};

export default DatePicker;
