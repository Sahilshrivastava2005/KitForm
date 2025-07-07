import React from "react";
import FieldsEdit from "./FieldsEdit";
import { themes } from "../assets/themes";
import formbg from "../assets/formbg";
export default function FormUi({
  jsonForm,
  onFieldupdate,
  deleteFields,
  selectedTheme,
  selectedBg
}) {
  const t = themes[selectedTheme] || themes.light; 
  const bgi=formbg[selectedBg];
  return (
    <div className={`border p-5  w-full ${bgi}`}>
      {/* outer card / container */}
      <div
        className={`max-w-2xl mx-auto rounded-lg p-4 shadow-md ${t.base} ${t.form}`}
      >
        {/* heading */}
        <h2 className="font-bold text-center text-2xl">
          {jsonForm?.formTitle}
        </h2>
        <h3 className={`text-center ${t.helper}`}>
          {jsonForm?.formSubheading}
        </h3>

        {/* fields */}
        {jsonForm?.formFields?.map((field, idx) => {
          let fieldComponent;

          switch (field.type) {
            /* ─────────────── SELECT ─────────────── */
            case "select":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={field.fieldName} className={t.label}>
                    {field.fieldLabel}
                  </label>

                  <select
                    id={field.fieldName}
                    name={field.fieldName}
                    defaultValue=""
                    className={t.select}
                  >
                    <option value="" disabled>
                      {field.placeholder}
                    </option>

                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
              break;

            /* ─────────────── RADIO ─────────────── */
            case "radio":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <span className={t.label}>{field.fieldLabel}</span>

                  <div className="flex flex-wrap gap-4 mt-1">
                    {field.options?.map((opt) => (
                      <label
                        key={opt.value}
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name={field.fieldName}
                          value={opt.value}
                          className={t.radio}
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
              break;

            /* ─────────────── TEXTAREA ─────────────── */
            case "textarea":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={field.fieldName} className={t.label}>
                    {field.fieldLabel}
                  </label>

                  <textarea
                    id={field.fieldName}
                    name={field.fieldName}
                    rows={field.rows || 4}
                    placeholder={field.placeholder}
                    className={`${t.textarea} placeholder:${t.input.placeholder}`}
                  />
                </div>
              );
              break;

            /* ─────────────── CHECKBOX / GROUP ─────────────── */
            case "checkbox": {
              const isGroup =
                Array.isArray(field.options) && field.options.length > 0;

              fieldComponent = isGroup ? (
                <div className="flex flex-col space-y-1">
                  <span className={t.label}>{field.fieldLabel}</span>

                  <div className="flex flex-wrap gap-4 mt-1">
                    {field.options.map((opt) => (
                      <label
                        key={opt.value}
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          name={`${field.fieldName}[]`}
                          value={opt.value}
                          className={t.checkbox}
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={field.fieldName}
                    name={field.fieldName}
                    className={t.checkbox}
                  />
                  <span className="text-sm">{field.fieldLabel}</span>
                </label>
              );
              break;
            }

            /* ─────────────── DEFAULT INPUT ─────────────── */
            default:
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={field.fieldName} className={t.label}>
                    {field.fieldLabel}
                  </label>

                  <input
                    id={field.fieldName}
                    type={field.type || "text"}
                    name={field.fieldName}
                    placeholder={field.placeholder}
                    className={`${t.input.field} placeholder:${t.input.placeholder}`}
                  />
                </div>
              );
          }

          /* wrapper that also holds edit/delete controls */
          return (
            <div
              key={idx}
              className="space-y-2 flex w-full items-start gap-3 p-3"
            >
              {fieldComponent}

              {/* field‑level edit component */}
              <FieldsEdit
                defaultValue={field}
                themeStyles={t}   
                onUpdate={(value) => onFieldupdate(value, idx)}
                deleteFields={() => deleteFields(idx)}
              />
            </div>
          );
        })}

        {/* submit button */}
        <div className="flex justify-center pt-4 p-5">
          <button type="submit" className={t.btn.primary}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
