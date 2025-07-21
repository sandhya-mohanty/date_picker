import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(RecurrenceContext);

  const handlePatternChange = (e) => {
    setRecurrence({ ...recurrence, pattern: e.target.value });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">Recurrence Pattern</label>
      <select
        value={recurrence.pattern}
        onChange={handlePatternChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
