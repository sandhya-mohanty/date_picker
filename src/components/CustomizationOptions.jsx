import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';

const CustomizationOptions = () => {
  const { recurrence, setRecurrence } = useContext(RecurrenceContext);

  const handleDaysOfWeekChange = (day) => {
    const updatedDays = recurrence.daysOfWeek.includes(day)
      ? recurrence.daysOfWeek.filter((d) => d !== day)
      : [...recurrence.daysOfWeek, day];

    setRecurrence({ ...recurrence, daysOfWeek: updatedDays });
  };

  return (
    <div className="mb-4">
      {recurrence.pattern === 'weekly' && (
        <div>
          <label className="block text-sm font-medium">
            Choose Days of the Week
          </label>
          <div className="flex space-x-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={recurrence.daysOfWeek.includes(day)}
                  onChange={() => handleDaysOfWeekChange(day)}
                  className="mr-2"
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}

      {recurrence.pattern === 'monthly' && (
        <div>
          <label className="block text-sm font-medium">
            Nth Day of the Month
          </label>
          <input
            type="number"
            min="1"
            max="31"
            value={recurrence.nthDay || ''}
            onChange={(e) =>
              setRecurrence({ ...recurrence, nthDay: e.target.value })
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
      )}
    </div>
  );
};

export default CustomizationOptions;
