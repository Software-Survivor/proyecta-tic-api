// Este  modelo no de ha implemantado por temas de optimización
import { Schema, model } from "mongoose";
import { Enum_ObjetiveType } from "./enum/enum";

interface Objetive {
  description: string;
  type: Enum_ObjetiveType;
}

const ObjetiveSchema = new Schema<Objetive>({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: Enum_ObjetiveType,
    required: true,
  }
});

const ObjetiveModel = model("Objetive", ObjetiveSchema, "objetives");

export { ObjetiveModel };
