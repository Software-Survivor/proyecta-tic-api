import { Schema, model } from "mongoose";
import { UserModel } from "./user";
import { ProjectModel } from "./project";

import { Enum_StatusIncription } from "./enums";

interface Inscriptions {
  status: Enum_StatusIncription;
  dateAdmission: Date;
  dateDischarge: Date;
  project: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
}

const InscriptionsSchema = new Schema<Inscriptions>({
  status: {
    type: String,
    enum: Enum_StatusIncription,
    required: true,
  },
  dateAdmission: {
    type: Date,
    required: true,
  },
  dateDischarge: {
    type: Date,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionsModel = model(
  "Inscriptions",
  InscriptionsSchema,
  "inscriptions"
);

export { InscriptionsModel };
