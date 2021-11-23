import { gql } from 'apollo-server-express';

const advancementTypes = gql`
    type Advancement {
        _id: ID!
        date: Date!
        description: String!
        observations: [String]
        project: Project!
        createdBy: User!
    }
    type Query{
        Advancements:[Advancement]
        AdvancementFilter(idProject: String!): [Advancement]
    }
    type Mutation{
        createAdvancement(
            date: Date!
            description: String!
            project: String!
            createdBy: String! 
        ): Advancement
        editAdvancement(
            _id: ID!
            date: Date
            description: String
            observations: [String]
            project: String
            createdBy: String
        ): Advancement
        deleteAdvancement(_id: String): Advancement
    }
`;
export { advancementTypes };