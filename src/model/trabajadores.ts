import { Schema, model } from "mongoose";

const TrabajadorSchema = new Schema({
    DNI: String,
    nombre: String,
    apellidos: String,
    fechaNac: Date,
    salHora: Number,
    cargo: String,
    tipoT: String,
    especialidad: Array,
    ubicacion: String,
    licencias: Array,
    incidencias: Array
})

export type iConductor = {
    DNI: String | null,
    nombre: String | null,
    apellidos: String | null,
    fechaNac: Date | null,
    salHora: Number | null,
    cargo: String | null,
    tipoT: String | null,
    licencias: Array<string> | null,
    incidencias: Array<string> | null
}

export type iMecanico = {
    DNI: String | null,
    nombre: String | null,
    apellidos: String | null,
    fechaNac: Date | null,
    salHora: Number | null,
    cargo: String | null,
    tipoT: String | null,
    especialidad: Array<string> | null,
    ubicacion: String | null
}

export const Trabajadores = model('trabajador', TrabajadorSchema  )