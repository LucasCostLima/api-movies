import { Studio } from "../models/studio";

export const getAllStudios = async (req, res) => {
  try {
    const studios = await Studio.find();
    res.send(studios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar todos os estúdios.");
  }
};

export const deleteStudioById = async (req, res) => {
  try {
    const studio = await Studio.findByIdAndDelete(req.params.id);
    res.send(studio);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao excluir estúdio.");
  }
};

export const updateStudioById = async (req, res) => {
  try {
    const studio = await Studio.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(studio);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizar estúdio.");
  }
};

export const createStudio = async (req, res) => {
  try {
    const studio = new Studio({ ...req.body });
    await studio.save();
    res.send(studio);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar estúdio.");
  }
};
