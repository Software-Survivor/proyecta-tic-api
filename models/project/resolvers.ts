import { ProjectModel } from './project';

const projectResolvers = {
    Query:{
        Projects: async(parent, args)=>{
            const projects = await ProjectModel.find()
            .populate('advancement')
            .populate('leader');
            return projects;
        },
        Project: async(parent, args)=>{
            const project = await ProjectModel.findOne({ _id: args._id })
            .populate('advancement')
            .populate('leader')
            .populate('inscription');
            return project;
        },
    },
    Mutation:{
        createProject: async(parent, args)=>{
            const projectCreated = await ProjectModel.create({
                nameProject: args.nameProject,
                budget: args.budget,
                startDate: args.startDate,
                endDate: args.endDate,
                leader: args.leader,
                statusProject: args.statusProject,
                stageProject: args.stageProject,
                objective: args.objective,
            });
            if(Object.keys(args).includes('statusProject')){
                projectCreated.statusProject = args.statusProject;
            }
            return projectCreated;
        },
        editProject: async(parent, args)=>{
            const projectEdited = await ProjectModel.findByIdAndUpdate( args._id, {
                nameProject: args.nameProject,
                budget: args.budget,
                startDate: args.startDate,
                endDate: args.endDate,
                leader: args.leader,
                statusProject: args.statusProject,
                stageProject: args.stageProject,
                objective: args.objective,
            }, {new: true});
            return projectEdited;
        },
        deleteProject: async (parent, args)=>{
            const projectDeleted = await ProjectModel.findOneAndDelete({
                _id: args._id,
            });
            return projectDeleted;
        },
        createObjective: async (parent, args)=>{
            const objectiveCreated = await ProjectModel.findByIdAndUpdate(
                args.idProject,{
                    //funcion de mongo que permite agregar un elemento a un array
                    //las funciones de mongo siempre se ponen con $
                    $addToSet:{
                        objective: {
                            description: args.description,
                            typeObjective: args.typeObjective,
                        }
                    }
            }, { new: true });
            return objectiveCreated;
        },
        editObjective: async (parent, args)=>{
            const objectiveEdited = await ProjectModel.findByIdAndUpdate(
                args.idProject,{
                    $set:{
                        [`objective.${args.indexObjective}.description`]: args.objectiveFields.description,
                        [`objective.${args.indexObjective}.typeObjective`]: args.objectiveFields.typeObjective,
                    },
                }, { new: true });
                return objectiveEdited;
        },
    },
};
export { projectResolvers };