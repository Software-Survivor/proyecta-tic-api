import { gql } from "apollo-server-core";

const enumsTypes = gql`

enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }
  enum Enum_StatusUsers {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
  enum Enum_ProjectStage {
    INICIADO
    EN_DESARROLLO
    TERMINADO
    NULO
  } 
  enum Enum_ProjectStatus {
    ACTIVO
    INACTIVO
  }
  enum Enum_ObjetiveType {
    GENERAL
    ESPECIFICO
  }
  enum Enum_StatusIncription {
    ACEPTADA
    RECHAZADA
  }
`;
export { enumsTypes };