import { Schema, model } from "mongoose";
import { UserModel } from "../user/user";
import { ProjectModel } from "../project/project";
import { Enum_StatusIncription } from "../enum/enum";

interface Inscription {
  project: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
  statusInscription: Enum_StatusIncription;
  dateStart: Date;
  dateEnd: Date;
}

const inscriptionSchema = new Schema<Inscription>({
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
  statusInscription: {
    type: String,
    enum: Enum_StatusIncription,
    default: Enum_StatusIncription.PENDIENTE,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
}, 
{
  toJSON:{virtuals: true},
  toObject:{virtuals: true},
}
);

const InscriptionModel = model(
  "Inscription",
  inscriptionSchema
);

export { InscriptionModel };
