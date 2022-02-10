"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const VehiculoSchema = new mongoose_1.Schema({
    matricula: String,
    numPlazas: Number,
    fechaInicio: Date,
    pagoTarjeta: Boolean,
    trabajadores: Array,
    tipoT: String,
    tipoTren: String,
    estaciones: Array,
    baño: Boolean,
    numPlantas: Number
});
exports.Vehiculos = (0, mongoose_1.model)('vehiculos', VehiculoSchema);
