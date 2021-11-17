import { gql } from "apollo-server-express";

const typeDefs = gql`
  # Se definen los enum fuera de cada tipo, y sun contenido debe ir en mayúscula por asi lo define GraphQl
  enum Enum_StatusUsers {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  # Se deben coloar todos los campos del modelos, para este caso es el modelo de usuarios
  type Usuario {
    _id: ID! # Se debe colocar ID en mayúscula, ya que así lo pide GraphQl
    name: String! #El simbolo de ! hace que el campo sea requerido
    lastname: String!
    identification: String!
    email: String!
    status: Enum_StatusUsers
    rol: Enum_Rol!
  }
  # Cuando se ejecuta la consulta, esta devuelve todo lo que hay en el modelo usuario. Este query llama al Query usuario que está en los resolver, esta su vez ejecuta la consulta.
  type Query {
    Usuario: [Usuario]
  }

  # Sirve para cambiar algo en la base de datos: CREAR, BORRAR, EDITAR

  type Mutation {
    # El nombre createUser puede ser cualquier otro nombre, recibe unos inputs y lo que va despues de los dos puntos 
    # es lo que devuelve. En este caso regresamos un objeto de tipo Usuario. No se le ponen los corchetes porque solo 
    # se está crando un registro. Al final se ejecuta un resolve que se deben llamar igual al tipo "Mutation".
    createUser(
      name: String!
      lastname: String!
      identification: String!
      email: String!
      status: Enum_StatusUsers
      rol: Enum_Rol!
    ): Usuario

    # editUser(
    #   _id: String!
    #   name: String!
    #   lastname: String!
    #   identification: String!
    #   email: String!
    #   status: Enum_StatusUsers
    #   rol: Enum_Rol!
    #   ): Usuario
    
    # Se puede eliminar por uno o mas campos si se usa la funcion findOneAndDelete en mogoose
    deleteUser(_id: String, email: String): Usuario
  }
`;

export { typeDefs };
