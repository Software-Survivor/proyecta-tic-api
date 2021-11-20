import { AdvancementModel } from "./advancement";

const resolversAdvancement = {
  Query: {
    Advancements: async (parent, args) => {
      const advancement = await AdvancementModel.find().populate("project").populate("createdBy");

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
        observation: args.observation,
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
          observation: args.observation,
          project: args.project,
          createdBy: args.createdBy,
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
