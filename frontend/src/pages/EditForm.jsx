import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import FormUi from "../components/FormUi";
import ControllerForm from "../components/ControllerForm";
import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const navigate = useNavigate();
  const [jsonForm, setJsonForm] = useState(undefined);
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [selectedBg, setSelectedBg] = useState("none");

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user?._id;

  /* ─────────────────────────────
     Load latest form on mount
  ───────────────────────────── */
  useEffect(() => {
    const fetchForm = async () => {
      if (!userId) {
        setJsonForm(null);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3000/api/user-forms/${userId}`);
        const forms = res.data.forms;

        if (forms?.length) {
          const latest = forms[forms.length - 1];
          setJsonForm(latest);
          setSelectedTheme(latest.theme || "dark");
          setSelectedBg(latest.backgroundColor || "none");
        } else {
          setJsonForm(null);
        }
      } catch (err) {
        console.error("Error loading form:", err);
        setJsonForm(null);
      }
    };

    fetchForm();
  }, [userId]);

  /* ─────────────────────────────
     Persist theme / background
  ───────────────────────────── */
  useEffect(() => {
    if (jsonForm) {
      updateUserForm({
        theme: selectedTheme,
        backgroundColor: selectedBg,
      });
    }
  }, [selectedTheme, selectedBg]);

  /* ─────────────────────────────
     PATCH form in DB
  ───────────────────────────── */
  const updateUserForm = async (partial) => {
    try {
      await axios.put(`http://localhost:3000/api/user-forms/update/${userId}`, {
        updatedForm: partial,
      });
    } catch (err) {
      console.error("Failed to update form:", err);
    }
  };

  /* ─────────────────────────────
     Update individual field
  ───────────────────────────── */
  const onFieldupdate = (value, idx) => {
    if (!jsonForm || !Array.isArray(jsonForm.formFields)) return;

    const updatedFields = [...jsonForm.formFields];
    const current = updatedFields[idx];

    if (!current?.type) {
      console.warn(`Field at index ${idx} missing 'type'. Skipping.`);
      return;
    }

    updatedFields[idx] = {
      ...current,
      fieldLabel: value.label,
      placeholder: value.placeholder,
    };

    const updatedForm = { ...jsonForm, formFields: updatedFields };
    setJsonForm(updatedForm);
    updateUserForm({ formFields: updatedFields });
  };

  /* ─────────────────────────────
     Delete a field by index
  ───────────────────────────── */
  const deleteFields = (idxToRemove) => {
    if (!jsonForm || !Array.isArray(jsonForm.formFields)) return;

    const updatedFields = jsonForm.formFields.filter((_, i) => i !== idxToRemove);
    const updatedForm = { ...jsonForm, formFields: updatedFields };
    setJsonForm(updatedForm);
    updateUserForm({ formFields: updatedFields });
  };

  /* ─────────────────────────────
     Loading or empty UI
  ───────────────────────────── */
  if (jsonForm === undefined) {
    return <div className="p-10 text-gray-700">Loading form...</div>;
  }

  if (jsonForm === null) {
    return (
      <div className="p-10 text-gray-700">
        <p>No form found for this user.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigate("/create-form")}
        >
          Create New Form
        </button>
      </div>
    );
  }

  /* ─────────────────────────────
     Final rendered UI
  ───────────────────────────── */
  return (
    <div className="p-10 min-h-screen">
      {/* Top bar */}
      <div className="flex items-center justify-between my-5">
        <h2
          className="flex items-center gap-2 text-gray-800 cursor-pointer hover:font-bold"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
          Back
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/aiform")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Live Preview
          </button>
          <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Share
          </button>
        </div>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controller panel */}
        <div className="p-5 border rounded-lg shadow-md">
          <ControllerForm
            selectedTheme={selectedTheme}
            setselectedTheme={setSelectedTheme}
            selectedBg={selectedBg}
            setselectedBg={setSelectedBg}
          />
        </div>

        {/* Form preview/editor */}
        <div className="p-5 border rounded-lg shadow-md w-full md:col-span-2">
          <FormUi
            jsonForm={jsonForm}
            onFieldupdate={onFieldupdate}
            selectedTheme={selectedTheme}
            selectedBg={selectedBg}
            deleteFields={deleteFields}
          />
        </div>
      </div>
    </div>
  );
}
