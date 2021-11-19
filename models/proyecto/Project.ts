import { Schema, model } from "mongoose";
import {Enum_EstadoProyecto, Enum_FaseProyecto} from '../enums/enums'

interface Project{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
}