import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({user,setUser}) {
  const navigate = useNavigate();


 

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate('/auth'); // Optional: redirect to login
  };

  return (
    <div className='p-5 border-b shadow-sm bg-amber-950'>
      <div className='flex items-center justify-between'>
        <img src="/photos/Kitform.png" width={50} className="rounded-full" alt="Logo" />

        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.profilePicture || "/photos/default-avatar.png"} // Fallback to a default picture
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-white object-cover"
              onClick={() => navigate('/dashboard')}
              style={{ cursor: 'pointer' }}
              title="Go to Dashboard"
            />
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate('/auth')}
            className="px-6 py-2 bg-amber-50 border-2 border-gray-800 text-gray-800 font-semibold rounded-md hover:bg-gray-800 hover:text-white transition duration-200"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}
