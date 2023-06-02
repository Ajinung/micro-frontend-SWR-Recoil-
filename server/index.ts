import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import modelData from "./model";
const url = "mongodb+srv://shecodesaj:shecodesaj@cluster0.xe1jgnf.mongodb.net/";
const port: number = 1122;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const data = await modelData.find();

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const data = await modelData.create({ title });

    res.status(201).json({
      message: "created successfully",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(url).then(() => {
  app.listen(port, () => {
    console.log("ready to rock 🚀💸");
  });
});
