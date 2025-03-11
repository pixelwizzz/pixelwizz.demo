import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import InboxPage from './Components/Inbox.jsx';

const App = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-white shadow-lg">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <InboxPage />
        </div>
      </div>
    </div>
  );
};

export default App;
