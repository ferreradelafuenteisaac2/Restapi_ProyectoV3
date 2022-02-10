"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const vehiculos_1 = require("../model/vehiculos");
const trabajadores_1 = require("../model/trabajadores");
const database_1 = require("../database/database");
let dSchemaTren = {
    matricula: null,
    numPlazas: null,
    fechaInicio: null,
    pagoTarjeta: null,
    trabajadores: null,
    tipoT: null,
    tipoTren: null,
    estaciones: null
};
let dSchemaAutobus = {
    matricula: null,
    numPlazas: null,
    fechaInicio: null,
    pagoTarjeta: null,
    trabajadores: null,
    tipoT: null,
    baño: null,
    numPlantas: null
};
let dSchemaConductor = {
    DNI: null,
    nombre: null,
    apellidos: null,
    fechaNac: null,
    salHora: null,
    cargo: null,
    tipoT: null,
    licencias: null,
    incidencias: null
};
let dSchemaMecanico = {
    DNI: null,
    nombre: null,
    apellidos: null,
    fechaNac: null,
    salHora: null,
    cargo: null,
    tipoT: null,
    especialidad: null,
    ubicacion: null
};
class Routes {
    constructor() {
        // POST----------------------------------------------------
        // Recibe un documento equipo en el body con los campos indicados aquí 
        this.postConductor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { DNI, nombre, apellidos, fechaNac, salHora, cargo, tipoT, licencias, incidencias } = req.body;
            yield database_1.db.conectarBD();
            dSchemaConductor = {
                DNI: DNI,
                nombre: nombre,
                apellidos: apellidos,
                fechaNac: fechaNac,
                salHora: salHora,
                cargo: cargo,
                tipoT: tipoT,
                licencias: licencias,
                incidencias: incidencias
            };
            const oSchema = new trabajadores_1.Trabajadores(dSchemaConductor);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postMecanico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { DNI, nombre, apellidos, fechaNac, salHora, cargo, tipoT, especialidad, ubicacion } = req.body;
            yield database_1.db.conectarBD();
            dSchemaMecanico = {
                DNI: DNI,
                nombre: nombre,
                apellidos: apellidos,
                fechaNac: fechaNac,
                salHora: salHora,
                cargo: cargo,
                tipoT: tipoT,
                especialidad: especialidad,
                ubicacion: ubicacion
            };
            const oSchema = new trabajadores_1.Trabajadores(dSchemaMecanico);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        // Recibe un documento en el body con los campos indicados aquí
        this.postTren = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { matricula, numPlazas, fechaInicio, pagoTarjeta, trabajadores, tipoT, tipoTren, estaciones } = req.body;
            yield database_1.db.conectarBD();
            const dSchemaTren = {
                matricula: matricula,
                numPlazas: numPlazas,
                fechaInicio: fechaInicio,
                pagoTarjeta: pagoTarjeta,
                trabajadores: trabajadores,
                tipoT: tipoT,
                tipoTren: tipoTren,
                estaciones: estaciones,
            };
            const oSchema = new vehiculos_1.Vehiculos(dSchemaTren);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postAutobus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { matricula, numPlazas, fechaInicio, pagoTarjeta, trabajadores, tipoT, baño, numPlantas } = req.body;
            yield database_1.db.conectarBD();
            const dSchemaAutobus = {
                matricula: matricula,
                numPlazas: numPlazas,
                fechaInicio: fechaInicio,
                pagoTarjeta: pagoTarjeta,
                trabajadores: trabajadores,
                tipoT: tipoT,
                baño: baño,
                numPlantas: numPlantas
            };
            const oSchema = new vehiculos_1.Vehiculos(dSchemaAutobus);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        // GET---------------------------------------------------
        this.getTrabajadores = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const j = yield trabajadores_1.Trabajadores.find({});
                res.json(j);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getTrabajador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { nombre, apellidos } = req.params;
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const j = yield trabajadores_1.Trabajadores.findOne({
                    nombre: nombre,
                    apellidos: apellidos
                });
                res.json(j);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getTrenes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const j = yield vehiculos_1.Vehiculos.find({ tipoT: "T" });
                res.json(j);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getVehiculosT = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield vehiculos_1.Vehiculos.aggregate([
                    {
                        $lookup: {
                            from: 'trabajadores',
                            localField: 'matricula',
                            foreignField: 'vehiculo',
                            as: "Asignacion"
                        }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        // ACTUALIZACIONES--------------------------------------------------------
        this.updateVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            const { tipoTransp, numPlazas, fechaInicio, conductores, trayecto, combustible, pagoT } = req.body;
            yield database_1.db.conectarBD();
            yield vehiculos_1.Vehiculos.findOneAndUpdate({
                matricula: matricula
            }, {
                tipoTransp: tipoTransp,
                numPlazas: numPlazas,
                fechaInicio: fechaInicio,
                conductores: conductores,
                trayecto: trayecto,
                combustible: combustible,
                pagoT: pagoT
            }, {
                new: true,
                runValidators: true
            })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.updateTrabajador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { DNI } = req.params;
            const { tipoT, nombre, apellidos, fechaNac, horasSem, salHora, especialidad, vehiculo } = req.body;
            yield database_1.db.conectarBD();
            yield vehiculos_1.Vehiculos.findOneAndUpdate({
                DNI: DNI
            }, {
                tipoT: tipoT,
                nombre: nombre,
                apellidos: apellidos,
                fechaNac: fechaNac,
                horasSem: horasSem,
                salHora: salHora,
                especialidad: especialidad,
                vehiculo: vehiculo
            }, {
                new: true,
                runValidators: true
            })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        // BORRADOS-------------------------------------------------------------------
        this.deleteTrabajador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { DNI } = req.params;
            yield database_1.db.conectarBD();
            yield trabajadores_1.Trabajadores.findOneAndDelete({ DNI: DNI })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this.deleteVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            yield database_1.db.conectarBD();
            yield vehiculos_1.Vehiculos.findOneAndDelete({ matricula: matricula })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        // POST
        this._router.post('/conductor', this.postConductor),
            this._router.post('/mecanico', this.postMecanico),
            this._router.post('/tren', this.postTren),
            this._router.post('/autobus', this.postAutobus),
            // GET
            this._router.get('/trenes', this.getTrenes),
            this._router.get('/trabajador/:nombre/:apellidos', this.getTrabajador),
            this._router.get('/trabajadores', this.getTrabajadores),
            // PUT
            this._router.put('/vehiculo/:matricula', this.updateVehiculo),
            this._router.put('/trabajador/:DNI', this.updateTrabajador),
            // DELETE
            this._router.delete('/deleteTrabajador/:DNI', this.deleteTrabajador),
            this._router.delete('/deleteVehiculo/:matricula', this.deleteVehiculo);
    }
}
const obj = new Routes();
obj.misRutas();
exports.routes = obj.router;
