import { AdvancementModel } from "./advancement";
import { ProjectModel } from "../project/project";

const resolversAdvancement = {
  Query: {
    Advancements: async (parent, args, context) => {
      let filter= {};;
      if(context.userData){
        if(context.userData.rol === "LIDER"){
          const projects = await ProjectModel.find({leader: context.userData._id });
          const projectList = projects.map((p)=>p._id.toString());
          filter = {
            project: {
              $in: projectList
            }
          }
        }
      }
      const advancement = await AdvancementModel.find({...filter}).populate("project").populate("createdBy");
      console.log("advancement", advancement)
      return advancement;
    },

    Advancement: async (parent, args) => {
      const advancement = await AdvancementModel.findOne({ _id: args._id });
      return advancement;
    },

    AdvancementAll: async (parent, args) => {
      const advancement = await AdvancementModel.find({ _id: args._id }).populate("project").populate("createdBy");
      return advancement;
    },
  },
  Mutation: {
    createAdvancement: async (parent, args) => {
      const advancementCreated = await AdvancementModel.create({
        date: args.date,
        description: args.description,
        observations: args.observations,
        project: args.project,
        createdBy: args.createdBy,
      });
      // if (Object.keys(args).includes("advancementStatus")) {
      //   advancementCreated.statusAdvancement = args.statusAdvancement;
      // }
      return advancementCreated;
    },

    editAdvancement: async (parent, args) => {
      const advancementEdited = await AdvancementModel.findByIdAndUpdate(args._id, {
          date: args.date,
          description: args.description,
          observations: args.observations,
          project: args.project,
          createdBy: args.createdBy,
        }, 
        {new: true}
         );
      return advancementEdited;
    },

    editObservation: async (parent, args) => {
      const advancementEdited = await AdvancementModel.findByIdAndUpdate(args._id, {
          observations: args.observations,
        }, 
        {new: true}
         );
      return advancementEdited;
    },

    deleteAdvancement: async (parent, args) => {
      const advancementDeleted = await AdvancementModel.findOneAndDelete({
        _id: args._id,
      });
      return advancementDeleted;
    },

    
  },
};

export { resolversAdvancement };
