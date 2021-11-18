import { Schema, model } from "mongoose";
import { ProjectModel } from "../project/project";
import { UserModel } from "../user/user";

interface Advancement {
  date: Date;
  description: string;
  observations: [string];
  project: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
}

const AdvancementSchema = new Schema<Advancement>({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  observations: [
    {
      type: String,
    },
  ],
  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const AdvancementModel = model("Advancement", AdvancementSchema);

export { AdvancementModel };