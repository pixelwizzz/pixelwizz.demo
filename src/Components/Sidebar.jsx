// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5 shadow-md">
      <button className="w-full py-2 bg-blue-500 text-white rounded-md text-lg mb-4">
        Compose
      </button>
      <ul className="space-y-3">
        <li className="flex items-center p-2 rounded-md hover:bg-gray-200">
          <span className="material-icons mr-2">inbox</span> Inbox
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-gray-200">
          <span className="material-icons mr-2">star</span> Starred
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-gray-200">
          <span className="material-icons mr-2">send</span> Sent
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-gray-200">
          <span className="material-icons mr-2">drafts</span> Drafts
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-gray-200">
          <span className="material-icons mr-2">label</span> Categories
        </li>
      </ul>
      <div className="absolute bottom-5 w-full flex items-center p-2 rounded-md hover:bg-gray-200">
        <span className="material-icons mr-2">settings</span> Settings
      </div>
    </div>
  );
};

export default Sidebar;
