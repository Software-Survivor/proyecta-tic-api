enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Líder",
    administrador = "Administrador",
} 


enum Enum_StatusUsers {
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "No autorizado",

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