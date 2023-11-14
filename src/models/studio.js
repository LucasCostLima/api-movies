const mongoose = require("mongoose");

export const Studio = new mongoose.model("Studio", {
  title: String,
  headquarters: String,
  unique: Boolean,
  studioid: Number,
});
