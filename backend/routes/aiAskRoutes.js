const express = require('express');
const router = express.Router();
const { runGemini } = require('../config/gemini'); 
const discription="On the basis of Discription please give me form in json format with form title form subheading form field form name placeholder name and form label in json format"
router.post("/ask", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const answer = await runGemini("Discription:"+prompt+". "+discription);
    
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gemini failed" });
  }
});

module.exports = router;