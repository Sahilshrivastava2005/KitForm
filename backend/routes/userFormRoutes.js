const express = require("express");
const router = express.Router();
const User = require("../models/user-model");

router.param("userId", async (req, res, next, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/user-forms/:userId", (req, res) => {
  const forms = req.user.forms.map((form) => form.toObject());
  res.json({ forms });
});

/* ───────── GET: Single form by index ───────── */
router.get("/user-forms/:userId/:formIndex", (req, res) => {
  const idx = Number(req.params.formIndex);
  if (Number.isNaN(idx) || idx < 0 || idx >= req.user.forms.length)
    return res.status(404).json({ error: "Form not found" });

  res.json(req.user.forms[idx].toObject());
});

/* ───────── POST: Create new form ───────── */
router.post("/user-forms/create/:userId", async (req, res) => {
  const { newForm } = req.body;
  if (!newForm?.formTitle)
    return res.status(400).json({ error: "Form title is required" });

  try {
    // Strip client-provided _id if exists
    delete newForm._id;

    if (Array.isArray(newForm.formFields)) {
      newForm.formFields = newForm.formFields.filter(f => !!f?.type);
    }

    req.user.forms.push(newForm);
    await req.user.save();

    const createdForm = req.user.forms.at(-1).toObject();
    res.status(201).json({ success: true, form: createdForm });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* ───────── PUT: Update latest form ───────── */
router.put("/user-forms/update/:userId", async (req, res) => {
  const { updatedForm = {} } = req.body;
  const ALLOWED_KEYS = [
    "formFields",
    "theme",
    "backgroundColor",
    "formTitle",
    "formSubheading",
  ];

  const safePayload = {};
  ALLOWED_KEYS.forEach((key) => {
    if (key in updatedForm) safePayload[key] = updatedForm[key];
  });

  if (Array.isArray(safePayload.formFields)) {
    safePayload.formFields = safePayload.formFields.filter((f) => !!f?.type);
  }

  try {
    const lastIndex = req.user.forms.length - 1;

    if (lastIndex < 0) {
      req.user.forms.push(safePayload);
    } else {
      req.user.forms[lastIndex].set(safePayload); // ✅ Use `.set()` to preserve _id
    }

    await req.user.save({ validateModifiedOnly: true });
    res.json({ success: true, message: "Form saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* ───────── PUT: Update form by index ───────── */
router.put("/user-forms/update/:userId/:formIndex", async (req, res) => {
  const idx = Number(req.params.formIndex);
  const { updatedForm = {} } = req.body;

  if (Number.isNaN(idx) || idx < 0 || idx >= req.user.forms.length)
    return res.status(400).json({ error: "Invalid form index" });

  const ALLOWED_KEYS = [
    "formFields",
    "theme",
    "backgroundColor",
    "formTitle",
    "formSubheading",
  ];
  const safeUpdate = {};
  ALLOWED_KEYS.forEach((key) => {
    if (key in updatedForm) safeUpdate[key] = updatedForm[key];
  });

  if (Array.isArray(safeUpdate.formFields)) {
    safeUpdate.formFields = safeUpdate.formFields.filter((f) => !!f?.type);
  }

  try {
    req.user.forms[idx].set(safeUpdate); // ✅ Safe update — keeps _id
    await req.user.save({ validateModifiedOnly: true });
    res.json({ success: true, message: `Form ${idx} updated` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* ───────── DELETE: Remove form by index ───────── */
router.delete("/user-forms/:userId/:formIndex", async (req, res) => {
  const idx = Number(req.params.formIndex);
  if (Number.isNaN(idx) || idx < 0 || idx >= req.user.forms.length)
    return res.status(400).json({ error: "Invalid form index" });

  try {
    req.user.forms.splice(idx, 1); // ✅ Deleting doesn't affect other _ids
    await req.user.save();
    res.json({ success: true, message: `Form ${idx} deleted` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

