import { AdvancementModel } from "./advancement";

const advancementResolvers ={
    Query:{
        Advancements: async(parent, args)=>{
            const advancements = await AdvancementModel.find().populate('project').populate('createdBy');
            return advancements;
        },
        AdvancementFilter: async(parent, args)=>{
            const advancementFilter = await AdvancementModel.find({ project: args.idProject }).populate('project').populate('createdBy');
            return advancementFilter;
        },
    },
    Mutation:{
        createAdvancement: async(parent, args)=>{
            const advancementCreated = await AdvancementModel.create({
                date: args.date,
                description: args.description,
                project: args.project,
                createdBy: args.createBy,
            });
            return advancementCreated;
        },
        editAdvancement: async(parent, args)=>{
            const advancementEdited = await AdvancementModel.findByIdAndUpdate( args._id, {
                date: args.date,
                description: args.description,
                observations: args.observations, 
                project: args.project,
                createdBy: args.createBy,
            });
            return advancementEdited;
        },
        deleteAdvancement: async (parent, args)=>{
            const advancementDeleted = await AdvancementModel.findOneAndDelete({ _id: args._id });
            return advancementDeleted;
        },
    },
};
export {advancementResolvers};