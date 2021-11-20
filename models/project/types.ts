import { gql } from 'apollo-server-express';

const projectTypes = gql`
    type Objective{
        _id: ID!
        description: String!
        type: Enum_ObjetiveType!
    }
    input createObjective{
        _id: ID!
        description: String!
        type: Enum_ObjetiveType!
    }
    type Project {
        _id: ID!
        nameProject: String!
        budget: Float!
        startDate: Date!
        endDate: Date!
        leader: Usuario!
        statusProject: Enum_ProjectStatus!
        stageProject: Enum_ProjectStage!
        objective: [Objective]
    }
    type Query {
        Projects: [Project]
        Project(_id: String!): Project
    }
    type Mutation{
        createProject(
            nameProject: String!
            budget: Float!
            startDate: Date!
            endDate: Date!
            leader: String!
            statusProject: Enum_ProjectStatus!
            stageProject: Enum_ProjectStage!
            objective: [createObjective]
        ): Project
        editProject(
            _id: ID!
            nameProject: String!
            budget: Float!
            startDate: Date!
            endDate: Date!
            leader: String!
            statusProject: Enum_ProjectStatus!
            stageProject: Enum_ProjectStage!
            objective: [createObjective]  
        ): Project
        deleteProject(_id: String, nameProject: String): Project
    }

`;
export { projectTypes };
