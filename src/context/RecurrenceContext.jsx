import React, { createContext, useState } from 'react';

export const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    pattern: 'daily',
    every: 1,
    daysOfWeek: [],
    nthDay: '',
    startDate: null,
    endDate: null,
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
