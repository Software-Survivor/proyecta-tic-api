import { gql } from "apollo-server-express";

const typesInscription = gql`
  type Inscription {
    _id: ID!
    project: Project!
    student: User!
    statusInscription: Enum_StatusIncription
    dateStart: Date
    dateEnd: Date
  }

  # Cuando se ejecuta la consulta, esta devuelve todo lo que hay en el modelo usuario. Este query llama al Query usuario que está en los resolver, esta su vez ejecuta la consulta.
  type Query {
    Inscriptions: [Inscription]
    Inscription(_id: String!): Inscription
    InscriptionAll(_id: String!): [Inscription]
  }

  # Sirve para cambiar algo en la base de datos: CREAR, BORRAR, EDITAR

  type Mutation {
    createInscription(
      project: String!
      student: String!
      statusInscription: Enum_StatusIncription
      dateStart: Date
      dateEnd: Date
    ): Inscription

    editInscription(
      _id: String!
      statusInscription: Enum_StatusIncription!
    ): Inscription
    
    editInscriptionStartDateNow(_id: [String!]): Inscription

    editInscriptionEndDateNow(_id: String!): Inscription

    approveInscription(_id: String!): Inscription

    # Se puede eliminar por uno o mas campos si se usa la funcion findOneAndDelete en mogoose
    deleteInscription(_id: String, nameInscription: String): Inscription
  }
`;

export { typesInscription };
