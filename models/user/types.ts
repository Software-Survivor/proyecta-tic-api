import { gql } from 'apollo-server-express';


const userTypes = gql`
    type User {
        _id: ID!
        email: String!
        identification: String!
        name: String!
        lastname: String!
        rol: Enum_Rol!
        status: Enum_StatusUsers
    }
    type Query {
        Users: [User]
        User(_id: String!): User
    }
    type Mutation {
        createUser(
            email: String!
            identification: String!
            name: String!
            lastname: String!
            rol: Enum_Rol!
            status: Enum_StatusUsers
        ): User
        editUser(
            _id: String!
            email: String!
            identification: String!
            name: String
            lastname: String
            rol: Enum_Rol!
            status: Enum_StatusUsers
        ): User
        deleteUser(_id: String, email: String): User

    }
`;
export { userTypes };