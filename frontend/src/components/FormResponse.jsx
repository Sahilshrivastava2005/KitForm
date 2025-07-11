import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function FormResponse() {
  const { formId } = useParams();
  const [responses, setResponses] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user?._id) {
      console.warn("User not found");
      navigate("/");
      return;
    }

    const fetchResponses = async () => {
      try {
        // Get the form title
        const formRes = await axios.get(`http://localhost:3000/api/user-forms/${user._id}`);
        const form = formRes.data.forms.find((f) => f._id === formId);
        setFormTitle(form?.formTitle || "Untitled Form");

        // Get the form responses
        const res = await axios.get(`http://localhost:3000/api/forms/${user._id}/${formId}/responses`);
        setResponses(res.data);
      } catch (err) {
        console.error("❌ Error fetching responses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, [formId, navigate]);

  if (loading) return <div className="text-center py-10">Loading responses…</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <button
        className="mb-4 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back to Forms
      </button>

      <h1 className="text-2xl font-bold">📨 Responses for: {formTitle}</h1>

      {responses.length === 0 ? (
        <p className="text-gray-500">No responses submitted yet.</p>
      ) : (
        <div className="space-y-6">
          {responses.map((res, index) => (
            <div key={res._id} className="border p-4 rounded shadow bg-white">
              <h2 className="font-semibold text-gray-700 mb-3">
                Response #{index + 1} —{" "}
                <span className="text-sm text-gray-500">
                  {new Date(res.submittedAt).toLocaleString()}
                </span>
              </h2>

              {/* ✅ Show responseData instead of data */}
              {res.responseData && Object.keys(res.responseData).length > 0 ? (
                <table className="table-auto w-full text-sm border-t border-gray-200">
                  <tbody>
                    {Object.entries(res.responseData).map(([fieldName, fieldValue]) => (
                      <tr key={fieldName} className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-700">{fieldName}</td>
                        <td className="py-2 text-gray-800">
                          {typeof fieldValue === "boolean"
                            ? fieldValue ? "Yes" : "No"
                            : fieldValue?.toString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-red-500">⚠️ No data submitted in this response.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
