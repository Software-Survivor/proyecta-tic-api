import { ProjectModel } from "./project";

const resolversProject = {
  Query: {
    Projects: async (parent, args) => {
      const project = await ProjectModel.find()
        .populate("leader")
        .populate("advancement")
        .populate("inscription");
      return project;
    },
    Project: async (parent, args) => {
      const project = await ProjectModel.findOne({ _id: args._id })
        .populate("leader")
        .populate("advancement")
        .populate("inscription");
      return project;
    },
    /////////////////////////// QUERY SOLICITADOS POR EL FRONTEND  ////////////////////////////////

    ListProjects: async (parent, args) => {
      const listProjects = await ProjectModel.find();
      return listProjects;
      /////// COPIAR ESTE VALOR EN EL FRONT /////////
      //  query ListProjects {
      //   ListProjects {
      //     _id
      //     nameProject
      //     budget
      //     endDate
      //     startDate
      //     statusProject
      //     stageProject
      //   }
      // }
    },
    DetailProject: async (parent, args) => {
      const detailProjects = await ProjectModel.findOne({ _id: args._id })
        .populate([
          {
            path: "advancement",
            populate: {
              path: "createdBy",
            },
          },
        ])
        .populate([
          {
            path: "inscription",
            populate: {
              path: "student",
            },
          },
        ]).populate("leader");
      return detailProjects;
         /////// COPIAR ESTE VALOR EN EL FRONT /////////
    // query DetailProject($id: String!) {
    //   DetailProject(_id: $id) {
    //     nameProject
    //     budget
    //     startDate
    //     endDate
    //     statusProject
    //     stageProject
    //     leader {
    //       name
    //       lastname
    //     }
    //     advancement {
    //       date
    //       createdBy {
    //         name
    //       }
    //     }
    //     inscription {
    //       dateStart
    //       dateEnd
    //       student {
    //         name
    //         lastname
    //       }
    //     }
    //     objective {
    //       description
    //       typeObjective
    //     }
    //   }
    // }
    },

    /////////////////////////// QUERY SOLICITADOS POR EL FRONTEND  ////////////////////////////////
 
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
      const projectEdited = await ProjectModel.findByIdAndUpdate(
        args._id,
        {
          ...args.fields,
        },
        { new: true }
      );
      return projectEdited;
    },

    deleteProject: async (parent, args) => {
      if (Object.keys(args).includes("nameProject")) {
        const projectDeleted = await ProjectModel.findOneAndDelete({
          email: args.email,
        });
        return projectDeleted;
      } else if (Object.keys(args).includes("_id")) {
        const projectDeleted = await ProjectModel.findOneAndDelete({
          _id: args._id,
        });
        return projectDeleted;
      }
    },

    createObjective: async (parent, args) => {
      const objectiveCreated = await ProjectModel.findByIdAndUpdate(
        args.idProject,
        {
          $addToSet: {
            objective: { ...args.field },
          },
        },
        { new: true }
      );

      return objectiveCreated;
    },

    editObjective: async (parent, args) => {
      const objectiveEdited = await ProjectModel.findByIdAndUpdate(
        args.idProject,
        {
          $set: {
            [`objective.${args.indexObjective}.description`]:
              args.field.description,
            [`objective.${args.indexObjective}.typeObjective`]:
              args.field.typeObjective,
          },
        },
        { new: true }
      );

      return objectiveEdited;
    },

    deleteObjective: async (parent, args) => {
      const objectiveDeleted = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProject },
        {
          $pull: {
            objective: {
              _id: args.idObjective,
            },
          },
        },
        { new: true }
      );
      return objectiveDeleted;
    },
  },
};

export { resolversProject };
