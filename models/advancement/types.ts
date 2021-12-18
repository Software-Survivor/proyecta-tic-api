import { gql } from "apollo-server-express";

const typesAdvancement = gql`


type Advancement {
  _id: ID!
  date: Date!
  description: String!
  observations: [String]
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

      editAdvancementOnly(
      _id: String!
      description: String
      ): Advancement

      editObservation(
        _id: String!
        observations: [String]
      ):Advancement

      createObservation(
        _id: String!
        observations: [String]
      ):Advancement
    
    # deleteAdvancement(_id: String): Advancement
    
    
  }
`;

export { typesAdvancement };



// import { gql } from "apollo-server-express";

// const typesAdvancement = gql`


// type Advancement {
//   _id: ID!
//   date: Date!
//   description: String!
//   observations: [String]
//   project: Project!
//   createdBy: User!
// }

// type Query {
//     Advancements: [Advancement] 
//     Advancement(_id:String!): Advancement
//     AdvancementAll(_id:String!): [Advancement]
// }

// type Mutation {
//     createAdvancement(
//       date: Date!
//       description: String!
//       observations: [String]!
//       project: String!
//       createdBy: String!
//     ): Advancement

//     # createObservations(
//     #   observations: [String]!
//     # ): Advancement

//     editAdvancement(
//       _id: String!
//       date: Date
//       description: String
//       observations: [String]
//       project: String
//       createdBy: String
//       ): Advancement

//       editObservation(
//       _id: String!
//       observations: [String]
//       ): Advancement
    
//     deleteAdvancement(_id: String): Advancement
    
    
//   }
// `;

// export { typesAdvancement };