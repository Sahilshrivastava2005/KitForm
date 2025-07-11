import React from "react";
import FieldsEdit from "./FieldsEdit";
import { themes } from "../assets/themes";
import formbg from "../assets/formbg";

export default function FormUi({
  jsonForm,
  onFieldupdate,
  deleteFields,
  selectedTheme,
  selectedBg,
}) {
  const t = themes[selectedTheme] || themes.light;
  const bgi = formbg[selectedBg] || "";

  return (
    <div className={`border p-5 w-full ${bgi}`}>
      <div className={`max-w-2xl mx-auto rounded-lg p-4 shadow-md ${t.base} ${t.form}`}>
        {/* Title and Subheading */}
        <h2 className="font-bold text-center text-2xl">
          {jsonForm?.formTitle || "Untitled Form"}
        </h2>
        <h3 className={`text-center ${t.helper}`}>
          {jsonForm?.formSubheading || ""}
        </h3>

        {/* Render Form Fields */}
        {jsonForm?.formFields?.map((field, idx) => {
          const fieldName = field.fieldName || `field_${idx}`;
          const fieldLabel = field.fieldLabel || `${jsonForm?.formTitle || "Form"} - ${fieldName}`;
          const placeholder = field.placeholder || "Enter value...";

          let fieldComponent;

          switch (field.type) {
            case "select":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={fieldName} className={t.label}>
                    {fieldLabel}
                  </label>
                  <select id={fieldName} name={fieldName} defaultValue="" className={t.select}>
                    <option value="" disabled>
                      {placeholder}
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

            case "radio":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <span className={t.label}>{fieldLabel}</span>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {field.options?.map((opt) => (
                      <label key={opt.value} className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name={fieldName}
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

            case "textarea":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={fieldName} className={t.label}>
                    {fieldLabel}
                  </label>
                  <textarea
                    id={fieldName}
                    name={fieldName}
                    rows={field.rows || 4}
                    placeholder={placeholder}
                    className={`${t.textarea} placeholder:${t.input.placeholder}`}
                  />
                </div>
              );
              break;

            case "checkbox": {
              const isGroup = Array.isArray(field.options) && field.options.length > 0;

              fieldComponent = isGroup ? (
                <div className="flex flex-col space-y-1">
                  <span className={t.label}>{fieldLabel}</span>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {field.options.map((opt) => (
                      <label key={opt.value} className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          name={`${fieldName}[]`}
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
                  <input type="checkbox" id={fieldName} name={fieldName} className={t.checkbox} />
                  <span className="text-sm">{fieldLabel}</span>
                </label>
              );
              break;
            }

            default:
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={fieldName} className={t.label}>
                    {fieldLabel}
                  </label>
                  <input
                    id={fieldName}
                    type={field.type || "text"}
                    name={fieldName}
                    placeholder={placeholder}
                    className={`${t.input.field} placeholder:${t.input.placeholder}`}
                  />
                </div>
              );
              break;
          }

          return (
            <div key={idx} className="space-y-2 flex w-full items-start gap-3 p-3">
              {fieldComponent}

              {/* Edit/Delete Controls */}
              <FieldsEdit
                defaultValue={field}
                themeStyles={t}
                onUpdate={(value) => onFieldupdate(value, idx)}
                deleteFields={() => deleteFields(idx)}
              />
            </div>
          );
        })}

        {/* Submit Button */}
        <div className="flex justify-center pt-4 p-5">
          <button type="submit" className={t.btn.primary}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
