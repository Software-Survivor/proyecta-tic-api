import { gql } from "apollo-server-express";

const typesProject = gql`
  
  type Objective {
    _id:ID!
    description: String!
    typeObjective:Enum_ObjetiveType!
  }

  input inputObjective{
    description: String!
    typeObjective:Enum_ObjetiveType!
  }

  type Project {
    _id: ID!
    nameProject: String!
    budget: Float!
    startDate: Date!
    endDate: Date!
    leader: Usuario!
    statusProject: Enum_ProjectStatus!
    stageProject: Enum_ProjectStage!
    objective: [Objective]
  }

  # Cuando se ejecuta la consulta, esta devuelve todo lo que hay en el modelo usuario. Este query llama al Query usuario que está en los resolver, esta su vez ejecuta la consulta.
  type Query {
    Projects: [Project]
    Project(_id:String!): Project

  }

  # Sirve para cambiar algo en la base de datos: CREAR, BORRAR, EDITAR

  type Mutation {
    createProject(
      nameProject: String!
      budget: Float!
      startDate: Date!
      endDate: Date!
      leader: String!
      statusProject: Enum_ProjectStatus!
      stageProject: Enum_ProjectStage!
      objective: [inputObjective]
    ): Project
  }
`;

export { typesProject };
