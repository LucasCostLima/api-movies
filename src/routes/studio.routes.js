import { Studio } from "../models/studio";
import { app } from "..";
import { Express } from "express";
import mongoose from "mongoose";

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
