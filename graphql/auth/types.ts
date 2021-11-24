import { gql } from "apollo-server-express";

const typesAuth = gql`
    type Mutation {
        register(
            name: String!
            lastname: String!
            identification: String!
            email: String!
            status: Enum_StatusUsers
            rol: Enum_Rol!
            password: String!
        ):String!

    }
`;

export {typesAuth};
