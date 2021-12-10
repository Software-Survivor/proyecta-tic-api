import { gql } from "apollo-server-express";

const typesProject = gql`
  type Objective {
    _id: ID!
    description: String!
    typeObjective: Enum_ObjetiveType!
  }

  input inputObjective {
    description: String!
    typeObjective: Enum_ObjetiveType!
  }

  input fieldObjective {
    description: String!
    typeObjective: Enum_ObjetiveType!
  }

  input fieldsProject{
    nameProject: String
    budget: Float
    startDate: Date
    endDate: Date
    leader: String
    statusProject: Enum_ProjectStatus
    stageProject: Enum_ProjectStage
  }

  type Project {
    _id: ID!
    nameProject: String!
    budget: Float!
    startDate: Date
    endDate: Date
    leader: User!
    statusProject: Enum_ProjectStatus!
    stageProject: Enum_ProjectStage!
    objective: [Objective]
    advancement: [Advancement]
    inscription:[Inscription]
  }

  # Cuando se ejecuta la consulta, esta devuelve todo lo que hay en el modelo usuario. Este query llama al Query usuario que está en los resolver, esta su vez ejecuta la consulta.
  type Query {
    Projects: [Project]
    Project(_id: String!): Project
    # /////////////////////////// QUERY SOLICITADOS POR EL FRONTEND  ////////////////////////////////
    ListProjects: [Project]
    DetailProject(_id: String!): Project

  }

  # Sirve para cambiar algo en la base de datos: CREAR, BORRAR, EDITAR

  type Mutation {
    createProject(
      nameProject: String!
      budget: Float!
      startDate: Date
      endDate: Date
      leader: String!
      statusProject: Enum_ProjectStatus
      stageProject: Enum_ProjectStage
      objective: [inputObjective]
    ): Project

    editProject(
      _id: String!
      fields: fieldsProject!
    ): Project

    editStageProject(
      _id: String!
      stageProject: Enum_ProjectStage!
    ): Project

    # Se puede eliminar por uno o mas campos si se usa la funcion findOneAndDelete en mogoose
    deleteProject(_id: String, nameProject: String): Project

    createObjective(
      idProject: String!,
      field:fieldObjective!
    ): Project

    editObjective(
      idProject: String!,
      indexObjective: Int!,
      field:fieldObjective!
    ): Project

    deleteObjective(
      idProject: String!,
      idObjective: String!,
    ):Project
  }
`;

export { typesProject };
