import React from 'react';
import DatePicker from './components/DatePicker';
import { RecurrenceProvider } from './context/RecurrenceContext';
import './index.css'; // Tailwind CSS

const App = () => {
  return (
    <RecurrenceProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mx-auto">
        <DatePicker />
      </div>
    </RecurrenceProvider>
  );
};

export default App;
