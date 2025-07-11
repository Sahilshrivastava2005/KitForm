const express = require('express');
const router = express.Router();
const { runGemini } = require('../config/gemini'); 
const User = require('../models/user-model');

const description = "On the basis of the description proper fieldLabel, return ONLY raw JSON.No markdown, no triple backticks, no extra text.Include: formTitle, formSubheading, formName, and formFields (array).Each formField must have: fieldName, fieldLabel(required), placeholder (if needed), type, and required.If type is radio or select, include options with { label, value }.";

router.post("/ask", async (req, res) => {
  try {
    const { prompt, userId } = req.body;

    if (!prompt || !userId) {
      return res.status(400).json({ error: "Prompt and userId are required" });
    }

    const geminiRaw = await runGemini("Description: " + prompt + ". " + description);

    const cleanedJson = typeof geminiRaw === 'string'
      ? geminiRaw.replace(/```json|```/g, '').trim()
      : geminiRaw;

    let generatedForm;
    try {
      generatedForm = typeof cleanedJson === 'string' ? JSON.parse(cleanedJson) : cleanedJson;
    } catch (parseErr) {
      return res.status(400).json({ error: "Invalid JSON from Gemini", details: parseErr.message });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { forms: generatedForm } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(generatedForm);
    res.json({ success: true, savedForm: generatedForm });

  } catch (err) {
    console.error("Gemini or DB error:", err.message);
    res.status(500).json({ error: "Gemini or DB error", message: err.message });
  }
});

module.exports = router;
