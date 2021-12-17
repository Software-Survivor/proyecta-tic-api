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
      const advancementEdited = await AdvancementModel.findByIdAndUpdate(
        args._id, 
        {
          description: args.description,
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

    createObservations: async (parent, args) => {
      const avanceConObservacion = await AdvancementModel.findByIdAndUpdate(args.idAdvancement, {
        $addToSet: {
          observations: {
            observations: args.observations
        },}
      }, { new: true }); 
      
      return avanceConObservacion
    },

    editObservations: async (parent, args) => {
      const editarObservacion = await AdvancementModel.findByIdAndUpdate(
        args.idAdvancement,
        {
          $set: {
            [`observations.${args.indexObservations}.observations`]:
              args.field.description,
            [`observations.${args.indexObservations}.typeObservations`]:
              args.field.typeObservations,
          },
        },
        { new: true }
      );
      return editarObservacion;
    },

    
  },
};

export { resolversAdvancement };
