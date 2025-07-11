import React from 'react';
import Create from './Create';

export default function SideBar({ onSectionChange, currentSection }) {
  // Utility function for highlighting active menu
  const getLinkClasses = (section) =>
    `w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
      currentSection === section
        ? 'bg-gray-100 text-blue-600'
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
    }`;

  return (
    <div className="flex flex-col w-64 h-screen border-e border-gray-100 bg-white">
      {/* ── Logo ── */}
      <div className="px-4 py-6">
        <img src="/photos/Kitform.png" width={50} className="rounded-full" alt="Logo" />
      </div>

      {/* ── Nav Items ── */}
      <div className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => onSectionChange("myForms")}
              className={getLinkClasses("myForms")}
            >
              My Forms
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange("responses")}
              className={getLinkClasses("responses")}
            >
              Responses
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange("analytics")}
              className={getLinkClasses("analytics")}
            >
              Analytics
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange("PaymentPlans")}
              className={getLinkClasses("PaymentPlans")}
            >
              Upgrade
            </button>
          </li>
        </ul>
      </div>

      {/* ── Storage and Create Form ── */}
      <div className="px-4 py-6 border-t border-gray-100">
        <p className="text-sm font-medium text-gray-700 mb-1">Storage Used</p>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div className="h-3 bg-blue-600 rounded-full" style={{ width: '60%' }} />
        </div>
        <p className="text-xs text-gray-500 mt-1">60% of 100 used</p>
        <Create/>
      </div>

      {/* ── Profile Bottom ── */}
      <div className="border-t border-gray-100">
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>
              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
