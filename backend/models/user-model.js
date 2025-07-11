const mongoose = require("mongoose");

/* ────────────── Option schema (for select / radio / checkbox groups) ────────────── */
const optionSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

/* ────────────── Field schema ────────────── */
const formFieldSchema = new mongoose.Schema(
  {
    fieldName:   { type: String, required: true },
    fieldLabel:  { type: String, default: "" },
    placeholder: { type: String, default: "" },

    /* Core */
    type: {
      type: String,
      required: true,
      enum: [
        "text",
        "textarea",
        "email",
        "password",
        "number",
        "date",
        "time",
        "select",
        "radio",
        "checkbox",
        "file",
        "tel",
        "url"  
      ],
    },
    required: { type: Boolean, default: false },

    /* Numeric constraints (text/number/date/time) */
    min: {
      type: Number,
      validate: {
        validator(v) {
          return this.max == null || v <= this.max;
        },
        message: () => "`min` cannot be greater than `max`",
      },
    },
    max: { type: Number },
    step: { type: Number }, // e.g. 0.01 for decimals

    /* Textarea‑specific */
    rows: { type: Number, default: 4 },

    /* Options for select / radio / checkbox group */
    options: { type: [optionSchema], default: undefined },
  },
  { timestamps: true, _id: false }
);

/* ────────────── Form schema ────────────── */
const formSchema = new mongoose.Schema(
  {
    formTitle:      { type: String, required: true },
    formSubheading: { type: String },
    formFields:     [formFieldSchema],

    /* Theme / style */
    theme:           { type: String, default: "light" },
    backgroundColor: { type: String, default: "#ffffff" },
  },
  { timestamps: true, _id: true }
);

/* ────────────── User schema ────────────── */
const userSchema = new mongoose.Schema(
  {
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    forms:    [formSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);