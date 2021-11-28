import { gql } from 'apollo-server-express';

const authTypes = gql`
type Token {
    token: String
    error: String
}
type Mutation{
    register(
        email: String!
        identification: String!
        name: String!
        lastname: String!
        rol: Enum_Rol!
        status: Enum_StatusUsers
        password: String!
    ): Token!
}
`;

export { authTypes }