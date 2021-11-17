enum Enum_Rol {
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LÍDER",
    ADMINISTRADOR = "ADMINISTRADOR",
} 


enum Enum_StatusUsers {
    PENDIENTE = "PENDIENTE",
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO = "NO AUTORIZADO",

}

enum Enum_ProjectPhase {
    INICIADO = "INICIADO",
    EN_DESARROLLO = "EN DESARROLLO",
    TERMINADO= "TERMINADO",
    NULA=''
} 


enum Enum_StatusProject {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO",

}

enum Enum_TypeObjetive {
    GENERAL = "GENERAL",
    ESPECIFICO = "ESPECIFICO",

}

enum Enum_StatusIncription {
    ACEPTADA = "ACEPTADA",
    RECHAZADA = "RECHAZADA",

}



export {Enum_Rol, Enum_StatusUsers, Enum_StatusProject, Enum_ProjectPhase, Enum_TypeObjetive, Enum_StatusIncription}