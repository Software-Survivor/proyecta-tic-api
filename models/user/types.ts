import { gql } from "apollo-server-express";

const typesUser = gql`
# Se deben coloar todos los campos del modelos, para este caso es el modelo de usuarios
type User {
  _id: ID! # Se debe colocar ID en mayúscula, ya que así lo pide GraphQl
  name: String! #El simbolo de ! hace que el campo sea requerido
  lastname: String!
  identification: String!
  email: String!
  status: Enum_StatusUsers
  rol: Enum_Rol!
  inscriptions: [Inscription]
  createdBy: [Advancement]
  projectsLed: [Project]
}

type Query {
    #Estas constantes deben conincidir con los nombres en los query de los resolver 
    Users: [User] #Devuelve una lista con todos los usuarios
    User(_id: String!): User #Devuelve un solo usuario consultado por su id
}

type Mutation {
    # El nombre createUser puede ser cualquier otro nombre, recibe unos inputs y lo que va despues de los dos puntos 
    # es lo que devuelve. En este caso regresamos un objeto de tipo User. No se le ponen los corchetes porque solo 
    # se está crando un registro. Al final se ejecuta un resolve que se deben llamar igual al tipo "Mutation".
    createUser(
      name: String!
      lastname: String!
      identification: String!
      email: String!
      status: Enum_StatusUsers
      rol: Enum_Rol!
    ): User

    editUser(
      _id: String!
      name: String
      lastname: String
      identification: String
      email: String
      status: Enum_StatusUsers
      rol: Enum_Rol
      ): User
    
    # Se puede eliminar por uno o mas campos si se usa la funcion findOneAndDelete en mogoose
    deleteUser(_id: String, email: String): User
  }
`;

export { typesUser };