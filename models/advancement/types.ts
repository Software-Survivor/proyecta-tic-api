import { gql } from "apollo-server-express";

const typesAdvancement = gql`


type Advancement {
  _id: ID!
  date: Date!
  description: String!
  observations: [String]!
  project: Project!
  createdBy: User!
}

type Query {
    Advancements: [Advancement] 
    Advancement(_id:String!): Advancement
    AdvancementAll(_id:String!): [Advancement]
}

type Mutation {
    createAdvancement(
      date: Date!
      description: String!
      observations: [String]!
      project: String!
      createdBy: String!
    ): Advancement

    editAdvancement(
      _id: String!
      date: Date
      description: String
      observations: [String]
      project: String
      createdBy: String
      ): Advancement
    
    deleteAdvancement(_id: String): Advancement
  }
`;

export { typesAdvancement };