import { Schema, model } from "mongoose";
import { Enum_TypeObjetive } from "./enums";

interface Objetive {
  description: string;
  type: Enum_TypeObjetive;
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
  }
});

const ObjetiveModel = model("Objetive", ObjetiveSchema, "objetives");

export { ObjetiveModel };
