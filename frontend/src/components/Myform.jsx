import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import Create from "./Create";

export default function Myform({ onFormCreated }) {
  const navigate = useNavigate();
  const [forms, setForms] = useState(undefined);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user?._id;

  const loadForms = async () => {
    if (!userId) return setForms([]);
    try {
      const res = await axios.get(`http://localhost:3000/api/user-forms/${userId}`);
      setForms(res.data.forms || []);
    } catch (err) {
      console.error("Error loading forms:", err);
      setForms([]);
    }
  };

  useEffect(() => {
    loadForms();
  }, [userId]);

  const handleDelete = async (idx) => {
    if (!window.confirm("Delete this form permanently?")) return;
    const prev = forms;
    setForms((f) => f.filter((_, i) => i !== idx));
    try {
      await axios.delete(`http://localhost:3000/api/user-forms/${userId}/${idx}`);
      if (onFormCreated) onFormCreated(); // Also refresh sidebar
    } catch (err) {
      console.error("Delete failed, reloading forms:", err);
      setForms(prev);
      loadForms();
    }
  };

  if (forms === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-gray-600">
        Loading your forms&hellip;
      </div>
    );
  }

  if (!forms.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
        <p className="text-gray-600 text-lg">You haven’t created any forms yet.</p>
        <Create
          onFormCreated={async () => {
            await loadForms();
            if (onFormCreated) onFormCreated(); // 👈 Trigger sidebar refresh
          }}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Forms</h1>
        <Create
          onFormCreated={async () => {
            await loadForms();
            if (onFormCreated) onFormCreated(); // 👈 Trigger sidebar refresh
          }}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {forms.map((form, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow p-5 bg-white"
          >
            <div>
              <h2 className="font-bold text-lg text-gray-800 truncate">
                {form.formTitle || "Untitled Form"}
              </h2>
              {form.formSubheading && (
                <p className="text-sm text-gray-500 mt-1 truncate">
                  {form.formSubheading}
                </p>
              )}
            </div>

            <div className="mt-4 text-sm text-gray-500">
              {form.formFields?.length ?? 0} field
              {form.formFields?.length === 1 ? "" : "s"}
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleDelete(idx)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                <TrashIcon className="w-4 h-4" />
                Delete
              </button>

              <button
                onClick={() => navigate(`/edit-form/${userId}/${idx}`)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <PencilSquareIcon className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
