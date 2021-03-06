//////////////////////////  USERS   /////////////////////////

enum Enum_Rol{
    ESTUDIANTE = 'ESTUDIANTE',
    LIDER = 'LIDER',
    ADMINISTRADOR = 'ADMINISTRADOR',
  }


enum Enum_StatusUsers{
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO',
}


//////////////////////////  PROJECT   /////////////////////////

enum Enum_ProjectStage {
    INICIADO = "INICIADO",
    EN_DESARROLLO = "EN_DESARROLLO",
    TERMINADO= "TERMINADO",
    NULO='NULO'
} 


enum Enum_ProjectStatus {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO",

}


//////////////////////////  OBJECTIVE   /////////////////////////

enum Enum_ObjetiveType {
    GENERAL = "GENERAL",
    ESPECIFICO = "ESPECIFICO",

}


//////////////////////////  INCRIPTION   /////////////////////////

enum Enum_StatusIncription {
    ACEPTADA = "ACEPTADA",
    RECHAZADA = "RECHAZADA",
    PENDIENTE = "PENDIENTE",

}



export {Enum_Rol, Enum_StatusUsers, Enum_ProjectStage, Enum_ProjectStatus, Enum_ObjetiveType, Enum_StatusIncription}