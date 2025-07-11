import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Responses() {
  const [forms, setForms] = useState([]);
  const [responsesCount, setResponsesCount] = useState({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user?._id) setUserId(user._id);
    else console.warn("User not found in localStorage");
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchFormsAndResponses = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/user-forms/${userId}`);
        const formList = res.data.forms || [];
        setForms(formList);

        // Get response counts in parallel
        const counts = {};
        await Promise.all(
          formList.map(async (form) => {
            const resResp = await axios.get(
              `http://localhost:3000/api/forms/${userId}/${form._id}/responses`
            );
            counts[form._id] = resResp.data.length;
          })
        );
        setResponsesCount(counts);
      } catch (err) {
        console.error("Error loading forms or responses", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFormsAndResponses();
  }, [userId]);

  if (loading) return <div className="text-center py-10">Loading…</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">📋 Your Forms & Responses</h1>
      {forms.length === 0 ? (
        <p className="text-center text-gray-500">No forms found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form) => (
            <div key={form._id} className="p-4 border rounded-lg shadow bg-white">
              <h2 className="text-xl font-semibold">{form.formTitle || "Untitled Form"}</h2>
              <p className="text-sm text-gray-600 mb-2">
                Responses: {responsesCount[form._id] ?? 0}
              </p>
              <button
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => navigate(`/form/${form._id}/responses`)}
              >
                View Responses
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}