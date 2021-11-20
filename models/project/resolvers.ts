import { ProjectModel } from "./project";

const resolversProject = {
  Query: {
    Projects: async (parent, args) => {
      const project = await ProjectModel.find().populate('leader').populate('advancement').populate('inscription');
      return project;
    },

    Project: async (parent, args) => {
      const project = await ProjectModel.findOne({_id: args._id}).populate('leader').populate('advancement').populate('inscription');
      return project;
    },

  },
  Mutation: {
    createProject: async (parent, args) => {
      const projectCreated = await ProjectModel.create({
        nameProject: args.nameProject,
        budget: args.budget,
        startDate: args.startDate,
        endDate: args.endDate,
        objective: args.objective,
        leader: args.leader,
        statusProject: args.statusProject,
        stageProject: args.stageProject,
      });
      // if (Object.keys(args).includes("projectStatus")) {
      //   projectCreated.statusProject = args.statusProject;
      // }
      return projectCreated;
    },

    editProject: async (parent, args) => {
      const projectEdited = await ProjectModel.findByIdAndUpdate(args._id, {
        nameProject: args.nameProject,
        budget: args.budget,
        startDate: args.startDate,
        endDate: args.endDate,
        leader: args.leader,
        statusProject: args.statusProject,
        stageProject: args.stageProject,
      }, 
      {new: true}
      );
      return projectEdited;
    },

    deleteProject: async (parent, args) => {
      if (Object.keys(args).includes("nameProject")) {
        const projectDeleted = await ProjectModel.findOneAndDelete({email: args.email});
        return projectDeleted;
      } else if (Object.keys(args).includes("_id")) {
        const projectDeleted = await ProjectModel.findOneAndDelete({_id: args._id});
        return projectDeleted;
      };
    },

  },
};

export { resolversProject };
