import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import CreateForm from '../components/CreateForm';
import Myform from '../components/Myform';
import Responses from '../components/Responses';
import PaymentPlans from '../components/PaymentPlans';

export default function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("myForms");
  const [refreshCount, setRefreshCount] = useState(0);

  const handleFormCreated = () => {
    setRefreshCount(prev => prev + 1);
  };

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
        <div className="relative z-50 w-64 bg-white h-full">
          <SideBar
            onSectionChange={setCurrentSection}
            currentSection={currentSection}
            refreshCount={refreshCount}
          />
        </div>
      </div>

      {/* Static Sidebar for md+ */}
      <div className="hidden md:block w-64">
        <SideBar
          onSectionChange={setCurrentSection}
          currentSection={currentSection}
          refreshCount={refreshCount}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Toggle Button */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Open Menu
          </button>
        </div>

        {/* Render selected section */}
        {currentSection === 'createForm' && <CreateForm />}
        {currentSection === 'myForms' && <Myform onFormCreated={handleFormCreated} />}
        {currentSection === 'responses' && <Responses />}
        {currentSection === 'PaymentPlans' && <PaymentPlans />}
      </div>
    </div>
  );
}