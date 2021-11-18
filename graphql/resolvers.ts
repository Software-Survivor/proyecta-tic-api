import { ProjectModel } from "../models/projects";
import { UserModel } from "../models/user";

const resolvers = {
  Query: {

    ////////////////////////////// USER ////////////////////////////// #

    Usuario: async (parent, args) => {
      // Consulta todos los usuarios de la base de datos
      const usuarios = await UserModel.find();
      return usuarios;
    },
    User: async (parent, args) => {
      const user = await UserModel.findOne({_id: args._id});
      return user;
    },
    
    ////////////////////////////// PROJECT ////////////////////////////// #

    Projects: async (parent, args) => {
      const project = await ProjectModel.find().populate('leader');
      return project;
    },

    Project: async (parent, args) => {
      const project = await ProjectModel.findOne({_id: args._id});
      return project;
    }

  },
  Mutation: {

    ////////////////////////////// USER ////////////////////////////// #

    // Se debe llamar igual al items de la mutation en los type.ts
    createUser: async (parent, args) => {
      const userCreated = await UserModel.create({
        name: args.name,
        lastname: args.lastname,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
      });
      if (Object.keys(args).includes("status")) {
        userCreated.status = args.status;
      }
      return userCreated;
    },

    editUser: async (parent, args) => {
      const userEdited = await UserModel.findByIdAndUpdate(args._id, {
        name: args.name,
        lastname: args.lastname,
        identification: args.identification,
        email: args.email,
        status: args.status,
        rol: args.rol,
      });
      return userEdited;
    },

    deleteUser: async (parent, args) => {
      if (Object.keys(args).includes("email")) {
        const userDeleted = await UserModel.findOneAndDelete({email: args.email});
        return userDeleted;
      } else if (Object.keys(args).includes("_id")) {
        const userDeleted = await UserModel.findOneAndDelete({_id: args._id});
        return userDeleted;
      };
    },

    ////////////////////////////// PROJECT ////////////////////////////// #


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

    // editProject: async (parent, args) => {
    //   const projectEdited = await ProjectModel.findByIdAndUpdate(args._id, {
    //     nameProject: args.nameProject,
    //     budget: args.budget,
    //     startDate: args.startDate,
    //     endDate: args.endDate,
    //     leader: args.leader,
    //     statusProject: args.statusProject,
    //     stageProject: args.stageProject,
    //   });
    //   return projectEdited;
    // },

    // deleteProject: async (parent, args) => {
    //   if (Object.keys(args).includes("email")) {
    //     const projectDeleted = await ProjectModel.findOneAndDelete({email: args.email});
    //     return projectDeleted;
    //   } else if (Object.keys(args).includes("_id")) {
    //     const projectDeleted = await ProjectModel.findOneAndDelete({_id: args._id});
    //     return projectDeleted;
    //   };
    // },

  },
};

export { resolvers };
