import { gql } from "apollo-server-express";

const typesInscription = gql`
  type Inscription {
    _id: ID!
    project: Project!
    student: Usuario!
    statusInscription: Enum_StatusIncription!
    dateStart: Date
    dateEnd: Date
  }

  type Query {
    Inscriptions: [Inscription]
    Inscription(_id: String!): Inscription
    InscriptionAll(_id:String!): [Inscription]
  }

  type Mutation {
    createInscription(
        project: String!
        student: String!
        statusInscription: Enum_StatusIncription!
        dateStart: Date!
        dateEnd: Date!
    ): Inscription

    editInscription(
      _id: String!
        project: String!
        student: String!
        statusInscription: Enum_StatusIncription!
        dateStart: Date!
        dateEnd: Date!
    ): Inscription

    approveInscription(
      _id: String!
    ): Inscription

    deleteInscription(_id: String, nameInscription: String): Inscription
  }
`;

export { typesInscription };
