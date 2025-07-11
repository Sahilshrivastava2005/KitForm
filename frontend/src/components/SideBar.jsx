import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SideBar({ onSectionChange, currentSection, refreshCount = 0 }) {
  const [formCount, setFormCount] = useState(0);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const userId = user?._id;
    if (!userId) return;

    axios.get(`http://localhost:3000/api/user-forms/${userId}`)
      .then(res => {
        const forms = res.data.forms || [];
        setFormCount(forms.length);
      })
      .catch(err => console.error("Failed to fetch forms:", err));
  }, [refreshCount]);

  const getLinkClasses = (section) =>
    `w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
      currentSection === section
        ? 'bg-gray-100 text-blue-600'
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
    }`;

  const getInitial = (email) => {
    if (!email) return "?";
    return email.charAt(0).toUpperCase();
  };

  return (
    <div className="flex flex-col w-64 h-screen border-e border-gray-100 bg-white">
      {/* Logo */}
      <div className="px-4 py-6">
        <img src="/photos/Kitform.png" width={50} className="rounded-full" alt="Logo" />
      </div>

      {/* Nav Items */}
      <div className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <button onClick={() => onSectionChange("myForms")} className={getLinkClasses("myForms")}>
              My Forms
            </button>
          </li>
          <li>
            <button onClick={() => onSectionChange("responses")} className={getLinkClasses("responses")}>
              Responses
            </button>
          </li>
          <li>
            <button onClick={() => onSectionChange("PaymentPlans")} className={getLinkClasses("PaymentPlans")}>
              Upgrade
            </button>
          </li>
        </ul>
      </div>

      {/* Form Usage */}
      <div className="px-4 py-6 border-t border-gray-100">
        <p className="text-sm font-medium text-gray-700 mb-1">Forms Created</p>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 bg-blue-600 rounded-full"
            style={{ width: `${Math.min((formCount / 100) * 100, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">{formCount} of 100 forms created</p>
      </div>

      {/* Profile */}
      <div className="border-t border-gray-100">
        <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <div className="size-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-lg uppercase">
            {getInitial(user?.email)}
          </div>
          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.email}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
