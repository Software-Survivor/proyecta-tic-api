import { Schema, model } from "mongoose";
import { Enum_ProjectStatus, Enum_ProjectStage, Enum_ObjetiveType } from "../enum/enum";
import { UserModel } from "../user/user";

interface Project {
  nameProject: string;
  budget: number;
  startDate: Date;
  endDate: Date;
  leader: Schema.Types.ObjectId;
  statusProject: Enum_ProjectStatus;
  stageProject: Enum_ProjectStage;
  objective: [{description: String; typeObjective: Enum_ObjetiveType}];
 
};

const projectSchema = new Schema<Project>({
  nameProject: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  statusProject: {
    type: String,
    enum: Enum_ProjectStatus,
    default: Enum_ProjectStatus.INACTIVO,
  },
  stageProject: {
    type: String,
    enum: Enum_ProjectStage,
    default: Enum_ProjectStage.NULO,
  },
  leader:{
      type: Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
  }, 
  objective: [
    {
      description:{
        type: String,
        required: true,
      },
      typeObjective: {
        type:String,
        enum: Enum_ObjetiveType,
        required: true,
      },
    }],
});

projectSchema.virtual('advancement',{
  ref: 'Advancement', //Este nombre debe ser igual al nombre que esta en el modelo de Advacement
  localField: '_id',
  foreignField: 'project' // Este nombre debe ser igual al del modelo de advancement
})

projectSchema.virtual('inscription',{
  ref: 'Inscription', //Este nombre debe ser igual al nombre que esta en el modelo de Incription
  localField: '_id',
  foreignField: 'project' // Este nombre debe ser igual al del modelo de incription
})

const ProjectModel = model("Project", projectSchema);

export { ProjectModel };
