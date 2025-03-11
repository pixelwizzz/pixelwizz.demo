import React from 'react';

const emails = [
  { id: 1, sender: 'Manish', subject: 'Meeting Reminder', preview: 'Don\'t forget about our meeting tomorrow at 10 AM.' },
  { id: 2, sender: 'Suhrud', subject: 'Project Update', preview: 'Here is the latest update on our project...' },
  { id: 3, sender: 'Support Team', subject: 'Account Verification', preview: 'Please verify your account by clicking the link below.' },
  // Add more emails as needed
];

const Inbox = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (Assuming Sidebar component is imported and used here) */}
      <div className="w-1/4 bg-gray-100 p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 flex flex-col">
        {/* Header/Toolbar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <button className="text-gray-600 hover:text-gray-800">
              <span className="material-icons">refresh</span>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="material-icons">more_vert</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">1-50 of 250</span>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="material-icons">chevron_left</span>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Email List */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {emails.map((email) => (
            <div
              key={email.id}
              className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="material-icons text-gray-500 mr-2">star_border</span>
              <div className="flex-1">
                <div className="font-semibold">{email.sender}</div>
                <div className="text-gray-600">
                  <span className="font-semibold">{email.subject}</span> - {email.preview}
                </div>
              </div>
              <span className="text-gray-500">10:00 AM</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
