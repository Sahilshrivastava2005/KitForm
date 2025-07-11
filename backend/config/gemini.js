const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runGemini(promptText) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // or gemini-1.5-pro if you want more power

  const result = await model.generateContent(promptText);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { runGemini };