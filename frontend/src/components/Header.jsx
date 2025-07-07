import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
  return (
    
    <div className='p-5 border-b shadow-sm bg-amber-950'>
      <div className='flex items-center justify-between'>
        <img src="/photos/Kitform.png" width={50} className="rounded-full" alt="Logo" />
         <button
        onClick={() => navigate('/auth')}
        className="px-6 py-2 bg-amber-50 border-2 border-gray-800 text-gray-800 font-semibold rounded-md hover:bg-gray-800 hover:text-white transition duration-200"
      >
        Get Started
      </button>
      </div>
    </div>
  );
}
