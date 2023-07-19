const CanchaModel = require("../models/cancha.model");

//GET

const getAllCanchas = async (req, res) => {
  try {
    const allCanchas = await CanchaModel.find(); //busca todos los documentos de la coleccion
    res.status(200).json(allCanchas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCanchaById = async (req, res) => {
  const id = req.params.id;
  const cancha = await CanchaModel.findById(id);
  if (cancha) {
    res.json(cancha);
  } else {
    res.status(404).json({ error: "Cancha no encontrada" });
  }
};

// Post
const crearCancha = async (req, res) => {
  try {
    const cancha = new CanchaModel(req.body);
    await cancha.save();
    res.status(201).json(cancha);
  } catch (error) {
    console.log(error);
  }
};

// Put

const updateCancha = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await CanchaModel.findById(id);
    if (cancha) {
      cancha.nombre = req.body.nombre;
      cancha.capacidad = req.body.capacidad;
      cancha.direccion = req.body.direccion;
      await cancha.save();
      res.status(200).json(cancha);
    } else {
      res.status(404).json({ error: "Cancha no encontrada" });
    }
  } catch (error) {
    console.log(error);
  }
};

//delete

const deleteCancha = async (req, res) => {
  try {
    const id = req.params.id;
    await CanchaModel.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Cancha eliminada" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCanchas,
  crearCancha,
  getCanchaById,
  updateCancha,
  deleteCancha,
};
