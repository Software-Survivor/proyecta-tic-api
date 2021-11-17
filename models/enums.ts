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
    iniciado = "Iniciado",
    en_desarrollo = "En desarrollo",
    terminado= "Terminado",
    nula=''
} 


enum Enum_StatusProject {
    activo = "Activo",
    inactivo = "Inactivo",

}

enum Enum_TypeObjetive {
    general = "General",
    especifico = "Específico",

}

enum Enum_StatusIncription {
    aceptada = "Aceptada",
    rechazada = "Rechazada",

}



export {Enum_Rol, Enum_StatusUsers, Enum_StatusProject, Enum_ProjectPhase, Enum_TypeObjetive, Enum_StatusIncription}