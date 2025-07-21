import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationOptions from './CustomizationOptions';
import DateRange from './DateRange';
import CalendarPreview from './CalendarPreview';

const DatePicker = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md ">
      <RecurrenceOptions />
      <CustomizationOptions />
      <DateRange />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
