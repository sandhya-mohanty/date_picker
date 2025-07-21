import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPreview = () => {
  const handleDateClick = (date) => {
    console.log(date);
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-lg mb-2">Preview of Recurrence</h4>
      <Calendar onClickDay={handleDateClick} className="rounded-md shadow-lg" />
    </div>
  );
};

export default CalendarPreview;
