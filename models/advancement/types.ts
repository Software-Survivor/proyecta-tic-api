import { gql } from "apollo-server-express";

const typesAdvancement = gql`
 type Observations {
    _id: ID!
    observations: String!
 
  }
input inputObservations{

    observations: String!
   
  }
 

type Advancement {
  _id: ID!
  date: Date!
  description: String!
<<<<<<< HEAD
  observations: [Observations]!
=======
  observations: [String]
>>>>>>> dev_gadea
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
      observations: [inputObservations]!
      project: String!
      createdBy: String!
    ): Advancement

    editAdvancement(
      _id: String!
      description: String
      observations: [String]!
      ): Advancement

      editObservation(
      _id: String!
      observations: [String]
      ): Advancement
    
    deleteAdvancement(_id: String): Advancement

    createObservations(
    idAdvancement: String!,
    observations: String!
    ): Advancement
    
  }
`;

export { typesAdvancement };