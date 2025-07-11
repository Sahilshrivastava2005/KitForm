import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { themes } from "../assets/themes";
import formbg from "../assets/formbg";

/* ──────────────────────────────────────────────────
   Helper: convert snake_orCamel‑case to Title Case
   ────────────────────────────────────────────────── */
const toTitleCase = (str = "") =>
  str
    .replace(/[_\-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

export default function LiveAiPreview() {
  const { ownerid, formid } = useParams();
  const [jsonForm, setJsonForm] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedBg, setSelectedBg] = useState("none");
  const [formData, setFormData] = useState({});

  /* ────────────── Fetch specific form ────────────── */
  useEffect(() => {
    if (!ownerid || !formid) return;

    const fetchForm = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/user-forms/${ownerid}`);
        const { forms = [] } = res.data;

        const matchedForm = forms.find((f) => f._id === formid);
        if (!matchedForm) {
          setJsonForm(null);
          return;
        }

        setJsonForm(matchedForm);
        setSelectedTheme(matchedForm.theme || "dark");
        setSelectedBg(matchedForm.backgroundColor || "none");
        setFormData({});
      } catch (err) {
        console.error("Error fetching form preview:", err);
        setJsonForm(null);
      }
    };

    fetchForm();
  }, [ownerid, formid]);

  /* ────────────── Input change handler ────────────── */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name.endsWith("[]")) {
        const key = name.slice(0, -2);
        setFormData((prev) => {
          const arr = prev[key] || [];
          return {
            ...prev,
            [key]: checked ? [...arr, value] : arr.filter((v) => v !== value),
          };
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  /* ────────────── Form submission handler ────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ownerid || !formid) {
      alert("Missing form information.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/api/forms/${ownerid}/${formid}/responses`,
        { data: formData }
      );
      alert("Form submitted successfully! 🎉");
      setFormData({});
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong — check the console.");
    }
  };

  if (!jsonForm) {
    return <div className="text-center py-10">Loading form preview…</div>;
  }

  const t = themes[selectedTheme] || themes.light;
  const bgi = formbg[selectedBg] || "";

  return (
    <form onSubmit={handleSubmit} className={`border p-5 w-full ${bgi}`}>
      <div className={`max-w-2xl mx-auto rounded-lg p-4 shadow-md ${t.base} ${t.form}`}>
        <h2 className="font-bold text-center text-2xl">
          {jsonForm.formTitle || "Untitled Form"}
        </h2>
        <h3 className={`text-center ${t.helper}`}>
          {jsonForm.formSubheading || ""}
        </h3>

        {jsonForm.formFields?.map((field, idx) => {
          const fieldName = field.fieldName || `field_${idx}`;
          const fieldLabel = field.fieldLabel || toTitleCase(fieldName);
          const placeholder = field.placeholder || "Enter value…";
          const value = formData[fieldName] ?? "";

          let fieldComponent;

          switch (field.type) {
            case "select":
              fieldComponent = (
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor={fieldName} className={t.label}>
                    {fieldLabel}
                  </label>
                  <select
                    id={fieldName}
                    name={fieldName}
                    className={t.select}
                    value={value}
                    onChange={handleChange}
                  >
                    <option value="" disabled>{placeholder}</option>
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
                          checked={value === opt.value}
                          onChange={handleChange}
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
                    value={value}
                    onChange={handleChange}
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
                          checked={value?.includes?.(opt.value) || false}
                          onChange={handleChange}
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
                    id={fieldName}
                    name={fieldName}
                    checked={value || false}
                    onChange={handleChange}
                    className={t.checkbox}
                  />
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
                    value={value}
                    onChange={handleChange}
                    className={`${t.input.field} placeholder:${t.input.placeholder}`}
                  />
                </div>
              );
              break;
          }

          return (
            <div key={idx} className="space-y-2 flex w-full items-start gap-3 p-3">
              {fieldComponent}
            </div>
          );
        })}

        <div className="flex justify-center pt-4 p-5">
          <button type="submit" className={t.btn.primary}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
