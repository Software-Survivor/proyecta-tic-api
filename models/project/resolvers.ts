import { ProjectModel } from './project';

const projectResolvers = {
    Query:{
        Projects: async(parent, args)=>{
            const projects = await ProjectModel.find();
            return projects;
        },
        Project: async(parent, args)=>{
            const project = await ProjectModel.findOne({ _id: args._id });
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
            });
            return projectEdited;
        },
        
    },
};
export { projectResolvers };