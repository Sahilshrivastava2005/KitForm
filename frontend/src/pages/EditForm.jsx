import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import FormUi from "../components/FormUi";
import { Toaster } from "react-hot-toast";
import ControllerForm from "../components/ControllerForm";
export default function EditForm() {
  const [jsonForm, setJsonForm] = useState({
    formTitle: "React Coding Workshop Registration",
    formSubheading: "Register for our exciting React workshop!",
    formFields: [
      {
        fieldName: "firstName",
        fieldLabel: "First Name",
        placeholder: "Enter your first name",
        type: "text",
        required: true,
      },
      {
        fieldName: "lastName",
        fieldLabel: "Last Name",
        placeholder: "Enter your last name",
        type: "text",
        required: true,
      },
      {
        fieldName: "email",
        fieldLabel: "Email Address",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },
      {
        fieldName: "phoneNumber",
        fieldLabel: "Phone Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        fieldName: "studentId",
        fieldLabel: "Student ID",
        placeholder: "Enter your student ID",
        type: "text",
        required: true,
      },
      {
        fieldName: "university",
        fieldLabel: "University/Institution",
        placeholder: "Enter your university/institution name",
        type: "text",
        required: true,
      },
      {
        fieldName: "yearOfStudy",
        fieldLabel: "Year of Study",
        placeholder: "Enter your year of study (e.g., 1, 2, 3, 4)",
        type: "number",
        required: true,
        min: 1,
        max: 5,
      },
      {
        fieldName: "priorExperience",
        fieldLabel: "Prior React Experience",
        placeholder: "Describe your prior experience with React (if any)",
        type: "textarea",
        required: false,
      },
      {
        fieldName: "dietaryRestrictions",
        fieldLabel: "Dietary Restrictions",
        placeholder: "Please specify any dietary restrictions",
        type: "textarea",
        required: false,
      },
    ],
  });
  const [selectedTheme, setselectedTheme] = useState("dark");
  const [selectedBg, setselectedBg] = useState("dark");
  const [updateTrigger, setupdateTrigger] = useState();
  useEffect(() => {
    setJsonForm(jsonForm);
  }, [updateTrigger]);
  const onFieldupdate = (value, idx) => {
    jsonForm.formFields[idx].fieldLabel = value.label;
    jsonForm.formFields[idx].placeholder = value.placeholder;
    setupdateTrigger(Date.now());
  };
  const deleteFields = (idxToremove) => {
    const result = jsonForm.formFields.filter(
      (item, idx) => idx != idxToremove
    );
    console.log(result);
    jsonForm.formFields = result;
    setupdateTrigger(Date.now());
  };

  return (
    <div className="p-10 min-h-screen">
      <div className="flex items-center justify-between my-5">
        <h2 className="flex items-center gap-2 text-gray-800 cursor-pointer hover:font-bold transition-all">
          <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
          Back
        </h2>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Live Preview
          </button>
          <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-gray-300 transition">
            Share
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Left controller — 1 / 3 */}
        <div className="p-5 border rounded-lg shadow-md">
          <ControllerForm
            selectedTheme={selectedTheme}
            setselectedTheme={setselectedTheme}
            selectedBg={selectedBg}
            setselectedBg={setselectedBg}
          />
        </div>

        {/* Middle form — 2 / 3 */}
        <div className="p-5 border rounded-lg shadow-md w-full md:col-span-2">
          <FormUi
            jsonForm={jsonForm}
            onFieldupdate={onFieldupdate}
            selectedTheme={selectedTheme}
            selectedBg={selectedBg}
            deleteFields={deleteFields} // shorter arrow fn not needed
          />
        </div>

        {/* Optional Right Column (for future use or spacing) */}
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}
