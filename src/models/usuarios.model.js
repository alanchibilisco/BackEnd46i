const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioModel = new Schema({
    nombre: String, 
    apellido: String,
    email: String,
    password: String,
    telefono: String,
    
}, { versionKey: false });


const UsuarioModel = mongoose.model("usuarios", usuarioModel); // crea la coleccion en la base de datos

module.exports = UsuarioModel;