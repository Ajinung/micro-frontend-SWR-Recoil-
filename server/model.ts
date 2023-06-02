import mongoose from "mongoose";

interface iData {
  title: string;
}

interface iDataCollection extends iData, mongoose.Document {}

const modelData = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true },
);

export default mongoose.model<iDataCollection>("models", modelData);
