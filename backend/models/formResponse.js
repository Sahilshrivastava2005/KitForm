const mongoose = require("mongoose");

const formResponseSchema = new mongoose.Schema(
  {
    /* ——— which form is this a response to? ——— */
    formOwner: {
      type: mongoose.Schema.Types.ObjectId, // the creator of the form
      ref: "User",
      required: true,
    },
    formId: {
      type: mongoose.Schema.Types.ObjectId, // the _id of the sub‑document in forms[ ]
      required: true,
    },
    responder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    responseData: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

/* Fast lookup: “all responses for one form” */
formResponseSchema.index({ formOwner: 1, formId: 1 });

module.exports = mongoose.model("FormResponse", formResponseSchema);
