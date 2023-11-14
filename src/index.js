const express = require("express");
const mongoose = require("mongoose");
import * as filmController from "./controllers/film.controller";
import * as studioController from "./controllers/studio.controller";

export const app = express();
app.use(express.json());
const port = 3000;

app.get("/film/studio/:studioId", filmController.getMoviesByStudio);
app.get("/film", filmController.getAllFilms);
app.delete("/film/:id", filmController.deleteFilmById);
app.put("/film/:id", filmController.updateFilmById);
app.post("/film", filmController.createFilm);

app.get("/studio", studioController.getAllStudios);
app.delete("/studio/:id", studioController.deleteStudioById);
app.put("/studio/:id", studioController.updateStudioById);
app.post("/studio", studioController.createStudio);

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://admin:ILH5ePJFFLuO2vfr@cluster0.inzefnw.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("App Running");
});
