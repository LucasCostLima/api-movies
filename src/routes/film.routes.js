import { Film } from "../models/film";
import { app } from "..";
import { Express } from "express";

app.get("/film/studio/:studioId", async (req, res) => {
  const moviesByStudio = await Film.find({
    studioId: req.params.studioId,
  }).exec();
  res.send(moviesByStudio);
});

app.get("/film", async (req, res) => {
  const films = await Film.find();
  res.send(films);
  console.log(films);
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
