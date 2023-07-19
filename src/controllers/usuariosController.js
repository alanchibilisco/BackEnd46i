const Usuarios = require("../models/usuarios.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    console.log(req.body)
    // console.log(req)
    const { nombre, apellido, email, password, telefono } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const usuario = new Usuarios({
      nombre,
      apellido,
      email,
      password: hash,
      telefono,
    });
    console.log(usuario, "usuario")
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};






module.exports = {
  register,
  getUsuarios
};
