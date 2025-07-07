import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import CreateForm from '../components/CreateForm';

export default function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
        <div className="relative z-50 w-64 bg-white h-full">
          <SideBar />
        </div>
      </div>

      {/* Static Sidebar on md+ screens */}
      <div className="hidden md:block w-64">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Toggle Button for Mobile */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Open Menu
          </button>
        </div>

        <CreateForm />
      </div>
    </div>
  );
}