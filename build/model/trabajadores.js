"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajadores = void 0;
const mongoose_1 = require("mongoose");
const TrabajadorSchema = new mongoose_1.Schema({
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
});
exports.Trabajadores = (0, mongoose_1.model)('trabajador', TrabajadorSchema);
