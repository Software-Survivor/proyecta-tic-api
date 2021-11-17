import { Schema, model } from "mongoose";
import { UserModel } from "./user";

interface Progress {
  date: Date;
  description: string;
  observation: [string];
  project: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
}

const ProgressSchema = new Schema<Progress>({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  observation: [
    {
      type: String,
    },
  ],
  project: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const ProgressModel = model("Progress", ProgressSchema, "progress");

export { ProgressModel };