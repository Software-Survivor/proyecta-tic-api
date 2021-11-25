import { gql } from "apollo-server-express";

const typesAuth = gql`

  type Token {
    token: String
    error: String
  }

  type Mutation {
    register(
      name: String!
      lastname: String!
      identification: String!
      email: String!
      status: Enum_StatusUsers
      rol: Enum_Rol!
      password: String!
    ): Token!

    login(
      email: String!
      password: String!
    ): Token
    
    validateToken: Token
  }

 
`;

export { typesAuth };
