import React from "react";
import './MessagesPopup.css'

const messages = [
  {
    id: 1,
    name: "Jim Tomson",
    message: "Hey! How is it going?",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "Today",
    unread: 1,
  },
  {
    id: 2,
    name: "Elena Bureeva",
    message: "Good news!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "Today",
    unread: 2,
  },
  {
    id: 3,
    name: "Jane Tomson",
    message: "I want to create new admin",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    time: "Yesterday",
    unread: 1,
  },
];

const MessagesPopup = () => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg p-4 mt-2 cart">
    
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-lg font-semibold">New Messages</h3>
        <span className="text-sm text-orange-500 font-medium">5 new messages</span>
      </div>

      <div className="mt-2">
        {["Today", "Yesterday"].map((section) => (
          <div key={section}>
            <h4 className="text-gray-500 text-xs mt-3 mb-2">{section}</h4>
            {messages
              .filter((msg) => msg.time === section)
              .map((msg) => (
                <div key={msg.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={msg.avatar}
                      alt={msg.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">{msg.name}</p>
                      <p className="text-xs text-gray-500">{msg.message}</p>
                    </div>
                  </div>
                  <span className="bg-orange-400 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {msg.unread}
                  </span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPopup;
