import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';

const DateRange = () => {
  const { recurrence, setRecurrence } = useContext(RecurrenceContext);

  const handleDateChange = (e, type) => {
    setRecurrence({ ...recurrence, [type]: e.target.value });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">Start Date</label>
      <input
        type="date"
        value={recurrence.startDate || ''}
        onChange={(e) => handleDateChange(e, 'startDate')}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
      />

      <label className="block text-sm font-medium mt-4">
        End Date 
      </label>
      <input
        type="date"
        value={recurrence.endDate || ''}
        onChange={(e) => handleDateChange(e, 'endDate')}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
};

export default DateRange;
