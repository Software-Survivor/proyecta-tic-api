import { Schema, model } from "mongoose";
import { Enum_StatusProject, Enum_ProjectPhase } from "./enums";
import { UserModel } from "./user";

interface Project {
  name: string;
  budget: number;
  startDate: Date;
  endData: Date;
  projectPhase: Enum_ProjectPhase;
  statusProject: Enum_StatusProject;
  leader: Schema.Types.ObjectId;
}

const ProjectSchema = new Schema<Project>({
  name: {
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
  endData: {
    type: Date,
    required: true,
  },
  projectPhase: {
    type: String,
    enum: Enum_ProjectPhase,
    default: Enum_ProjectPhase.nula,
  },
  statusProject: {
    type: String,
    enum: Enum_StatusProject,
    default: Enum_StatusProject.inactivo,
  },
  leader:{
      type: Schema.Types.ObjectId,
      ref: UserModel,
  }
});

const ProjectModel = model("Project", ProjectSchema, "projects");

export { ProjectModel };
