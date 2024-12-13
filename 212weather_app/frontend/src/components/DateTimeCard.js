import React from "react";

const DateTimeCard = ({ city }) => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString();

  return (
    <div className="datetime-card">
      <h3>{city}</h3>
      <p>{dateString}</p>
      <p>{timeString}</p>
    </div>
  );
};

export default DateTimeCard;
