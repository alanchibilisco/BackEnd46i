const mongoose = require("mongoose");
const CanchaModel = require("../models/cancha.model");

const uri = process.env.PORTDB;
const db = process.env.DB;

const crearCancha = async () => {
    try {
        const cancha = new CanchaModel({
            nombre: "Ciudadela",
            capacidad: 27000,
            direccion: "Rondeau y Pellegrini"
        });
        await cancha.save();
        console.log("cancha creada")
    } catch (error) {
        console.log(error);
    }
};

const conectDb = async () => {
  try {
    await mongoose.connect(`${uri}/${db}`, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("DB is connected");
    const allCanchas = await CanchaModel.find(); //busca todos los documentos de la coleccion
    console.log(allCanchas);
    crearCancha();
      
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectDb;
