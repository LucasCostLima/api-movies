const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const port = 3000;

const Studio = new mongoose.model("Studio", {
  title: String,
  headquarters: String,
  unique: Boolean,
  studioid: Number,
});

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
  release_year: Number,
  studioId: Number,
  name_studio: String,
});

app.get("/film/studio/:studioId", async (req, res) => {
  const moviesByStudio = await Film.find({
    studioId: req.params.studioId,
  }).exec();

  console.log();
  res.send(moviesByStudio);
});

app.get("/studio", async (req, res) => {
  const studios = await Studio.find();
  res.send(studios);
});

app.delete("/studio/:id", async (req, res) => {
  const studio = await Studio.findByIdAndDelete(req.params.id);
  return res.send(studio);
});

app.put("/studio/:id", async (req, res) => {
  const studio = await Studio.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      headquarters: req.body.headquarters,
      studioid: req.body.studioid,
      unique: req.body.unique,
    },
    {
      new: true,
    }
  );
  return res.send(studio);
});

app.post("/studio", async (req, res) => {
  const studio = new Studio({
    title: req.body.title,
    headquarters: req.body.headquarters,
    studioid: req.body.studioid,
    unique: req.body.unique,
  });
  await studio.save();
  return res.send(studio);
});

app.get("/film", async (req, res) => {
  const films = await Film.find();
  res.send(films);
});

app.delete("/film/:id", async (req, res) => {
  const film = await Film.findByIdAndDelete(req.params.id);
  return res.send(film);
});

app.put("/film/:id", async (req, res) => {
  const film = await Film.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
      release_year: req.body.release_year,
      studioId: req.body.studioId,
      name_studio: req.body.name_studio,
    },
    {
      new: true,
    }
  );

  return res.send(film);
});

app.post("/film", async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
    release_year: req.body.release_year,
    studioId: req.body.studioId,
    name_studio: req.body.name_studio,
  });
  await film.save();
  return res.send(film);
});

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://admin:ILH5ePJFFLuO2vfr@cluster0.inzefnw.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("App Running");
});
