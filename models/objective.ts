import { Schema, model } from "mongoose";
import { Enum_TypeObjetive } from "./enums";
import { ProjectModel } from "./projects";

interface Objetive {
  description: string;
  type: Enum_TypeObjetive;
  project: Schema.Types.ObjectId;
}

const ObjetiveSchema = new Schema<Objetive>({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: Enum_TypeObjetive,
    required: true,
  },
  project:{
      type: Schema.Types.ObjectId,
      ref: ProjectModel,
    },
});

const ObjetiveModel = model("Objetive", ObjetiveSchema, "objetives");

export { ObjetiveModel };
