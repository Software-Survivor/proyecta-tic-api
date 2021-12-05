import { gql } from 'apollo-server-express';

const projectTypes = gql`
    type Objective{
        _id: ID!
        description: String!
        typeObjective: Enum_ObjetiveType!
    }
    input createObjective{
        description: String!
        typeObjective: Enum_ObjetiveType!
    }
    input objectiveFields{
        description: String!
        typeObjective: String!
    }
    type Project {
        _id: ID!
        nameProject: String!
        budget: Float!
        startDate: Date
        endDate: Date
        leader: User!
        statusProject: Enum_ProjectStatus!
        stageProject: Enum_ProjectStage!
        objective: [Objective]
        advancement: [Advancement]
    }
    type Query {
        Projects: [Project]
        Project(_id: String!): Project
    }
    type Mutation{
        createProject(
            nameProject: String!
            budget: Float!
            startDate: Date
            endDate: Date
            leader: String!
            statusProject: Enum_ProjectStatus
            stageProject: Enum_ProjectStage
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
        createObjective(
            idProject: String!
            description: String!
            typeObjective: Enum_ObjetiveType!
        ): Project
        editObjective(
            idProject: String!
            indexObjective: Int!
            objectiveFields: objectiveFields!
        ): Project
        deleteObjective(
            idProject: String!
            idObjective:String!
        ):Project
    }

`;
export { projectTypes };
