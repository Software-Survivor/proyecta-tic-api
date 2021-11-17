import { gql } from "apollo-server-express";

const typeDefs = gql`

  enum Enum_StatusUsers{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  type User {
    _id: ID!
    name: String!
    lastname: String!
    identification: String!
    email; String!
    status: Enum_StatusUsers!
    rol: Enum_Rol!
  }
  type Query {
      Usuario: [Usuario]
  }

  type Mutation{
    createUser(
      name: String!
      lastname: String!
      identification: String!
      email; String!
      status: Enum_StatusUsers!
      rol: Enum_Rol!
    ):User
  }
`;

export { typeDefs };
