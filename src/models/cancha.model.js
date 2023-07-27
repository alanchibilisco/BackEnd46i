const mongoose = require("mongoose");
const { Schema } = mongoose; 

const canchaSchema = new Schema({
    nombre: String,
    capacidad: Number,
    direccion: String,
}, {versionKey: false});


const CanchaModel = mongoose.model("canchas", canchaSchema); // crea la coleccion en la base de datos

module.exports = CanchaModel;
