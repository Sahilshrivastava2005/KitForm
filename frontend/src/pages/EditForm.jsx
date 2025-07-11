import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import FormUi from "../components/FormUi";
import ControllerForm from "../components/ControllerForm";
import { useNavigate, useParams } from "react-router-dom";
import ShareDialog from "../components/ShareDialog";

export default function EditForm() {
  const { userId: paramUserId, formIndex } = useParams();
  const navigate = useNavigate();
  const [jsonForm, setJsonForm] = useState(undefined);
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [selectedBg, setSelectedBg] = useState("none");
  const [shareOpen, setShareOpen] = useState(false);

  const localUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = paramUserId || localUser?._id;

  useEffect(() => {
    const fetchForm = async () => {
      if (!userId || formIndex == null) {
        setJsonForm(null);
        return;
      }

      try {
        const res = await axios.get(
          `http://localhost:3000/api/user-forms/${userId}/${formIndex}`
        );
        const form = res.data;

        setJsonForm(form);
        setSelectedTheme(form.theme || "dark");
        setSelectedBg(form.backgroundColor || "none");
      } catch (err) {
        console.error("Error loading form:", err);
        setJsonForm(null);
      }
    };

    fetchForm();
  }, [userId, formIndex]);

  useEffect(() => {
    if (jsonForm) {
      updateUserForm({
        theme: selectedTheme,
        backgroundColor: selectedBg,
      });
    }
  }, [selectedTheme, selectedBg]);

  const updateUserForm = async (partial) => {
    try {
      await axios.put(
        `http://localhost:3000/api/user-forms/update/${userId}/${formIndex}`,
        { updatedForm: partial }
      );
    } catch (err) {
      console.error("Failed to update form:", err);
    }
  };

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

  const deleteFields = (idxToRemove) => {
    if (!jsonForm || !Array.isArray(jsonForm.formFields)) return;

    const updatedFields = jsonForm.formFields.filter(
      (_, i) => i !== idxToRemove
    );
    const updatedForm = { ...jsonForm, formFields: updatedFields };
    setJsonForm(updatedForm);
    updateUserForm({ formFields: updatedFields });
  };

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
            onClick={() => {
              if (jsonForm && jsonForm._id) {
                navigate(`/aiform/${userId}/${jsonForm._id}`);
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Live Preview
          </button>
           <button
    onClick={() => setShareOpen(true)}
    className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
  >
    Share
  </button>
          <ShareDialog
            open={shareOpen}
            onClose={() => setShareOpen(false)}
            url={`http://localhost:5173/aiform/${userId}/${jsonForm._id}`}
          />
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
