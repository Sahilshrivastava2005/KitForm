const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user-model");
const FormResponse = require("../models/formResponse");
console.log("✅ formResRoutes mounted");
// Helpers
function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function toObjectId(id) {
  return new mongoose.Types.ObjectId(id);
}

// ───── POST /api/forms/:ownerId/:formId/responses ─────
router.post("/:ownerId/:formId/responses", async (req, res) => {
  const { ownerId, formId } = req.params;
  const { data } = req.body;

  console.log("🔥 POST /responses HIT", req.params);

  if (!isValidObjectId(ownerId) || !isValidObjectId(formId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const owner = await User.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ message: "Form owner not found" });
    }

    const form = owner.forms.find((form) => form._id.toString() === formId);
    if (!form) {
      return res.status(404).json({ message: "Form not found in user" });
    }

    // ✅ Create and save the form response
    const savedResponse = await FormResponse.create({
      formOwner: ownerId,
      formId,
      responseData: data,
      submittedAt: new Date(),
    });

    res.status(201).json(savedResponse);
  } catch (err) {
    console.error("❌ Error saving response:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ───── GET /api/forms/:ownerId/:formId/responses ─────
router.get("/:ownerId/:formId/responses", async (req, res) => {
  const { ownerId, formId } = req.params;

  console.log("🔥 GET /responses hit with params:", req.params); // Debug log

  if (!isValidObjectId(ownerId) || !isValidObjectId(formId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const responses = await FormResponse.find(
      {
        formOwner: toObjectId(ownerId),
        formId: toObjectId(formId),
      },
      "-__v"
    ).sort({ submittedAt: -1 });

    res.json(responses);
  } catch (err) {
    console.error("❌ Error fetching responses:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
