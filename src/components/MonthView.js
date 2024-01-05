import React from 'react';
import './MonthView.css';

const MonthView = ({ months, handleMonthSelection, selectedMonth }) => {
  const chunkSize = 4;
  const monthGroups = Array.from({ length: Math.ceil(months.length / chunkSize) }, (v, i) =>
    months.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  return (
    <div className="month-view">
      {monthGroups.map((group, index) => (
        <div key={index} className="month-group">
          {group.map((month, innerIndex) => (
            <div
              key={innerIndex}
              onClick={() => handleMonthSelection(month)}
              className={`month-button ${selectedMonth === month ? 'selected' : ''}`}
            >
              {month}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MonthView;
