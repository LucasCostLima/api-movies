import { Film } from "../models/film";

export const getMoviesByStudio = async (req, res) => {
  try {
    const moviesByStudio = await Film.find({
      studioId: req.params.studioId,
    }).exec();
    res.send(moviesByStudio);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar filmes por estúdio.");
  }
};

export const getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.send(films);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar todos os filmes.");
  }
};

export const deleteFilmById = async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    res.send(film);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao excluir filme.");
  }
};

export const updateFilmById = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(film);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizar filme.");
  }
};

export const createFilm = async (req, res) => {
  try {
    const film = new Film({ ...req.body });
    await film.save();
    res.send(film);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar filme.");
  }
};
