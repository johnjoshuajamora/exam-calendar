import React from "react";

function CalendarDays(props) {
  const currentDay = new Date();
  
  const handleDateClick = (clickedDate) => {
    props.changeCurrentDay(clickedDate, true);
  };

  const firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      day: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <div className="table-content">
      {currentDays.map((data, index) => (
        <div
          key={data.currentMonth + "-" + data.day}
          className={`calendar-day${data.currentMonth ? " current" : ""}${data.selected ? " selected" : ""}${currentDay.toDateString() === data.date.toDateString() ? " today" : ""}`}
          onClick={() => handleDateClick(data.date)}
        >
          <p>{data.day}</p>
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;
