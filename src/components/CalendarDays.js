import React from "react";

function CalendarDays(props) {
  const currentDay = new Date();

  const handleDateClick = (clickedDate) => {
    props.changeCurrentDay(clickedDate, true);
  };

  if (!props.day) {
    return null;
  }

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

  const rows = [];
  let cells = [];

  currentDays.forEach((data, index) => {
    cells.push(
      <td
        key={data.currentMonth + "-" + data.day}
        className={`calendar-day${data.currentMonth ? " current" : ""}${
          data.selected ? " selected" : ""
        }${
          currentDay.toDateString() === data.date.toDateString() ? " today" : ""
        }`}
        onClick={() => handleDateClick(data.date)}
      >
        <p>{data.day}</p>
      </td>
    );

    if ((index + 1) % 7 === 0) {
      rows.push(<tr key={index}>{cells}</tr>);
      cells = [];
    }

    if (index === currentDays.length - 1 && cells.length > 0) {
      rows.push(<tr key={index + 1}>{cells}</tr>);
    }
  });

  return (
    <tbody>{rows}</tbody>
  );
}

export default CalendarDays;