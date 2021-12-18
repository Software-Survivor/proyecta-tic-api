import { Schema, model } from "mongoose";
import { ProjectModel } from "../project/project";
import { UserModel } from "../user/user";

interface Advancement {
  date: Date;
  description: string;
  observations:  [{ observations: String}]
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
      observations: {
        type: String,
      }}
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
},
{
  toJSON:{virtuals: true},
  toObject:{virtuals: true},
}
);

const AdvancementModel = model("Advancement", AdvancementSchema);

export { AdvancementModel };