import mongoose from "mongoose";

export const Film = new mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
  release_year: Number,
  studioId: Number,
  name_studio: String,
});
