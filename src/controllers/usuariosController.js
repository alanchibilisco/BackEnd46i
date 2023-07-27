const Usuarios = require("../models/usuarios.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log(req.body);
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
    console.log(usuario, "usuario");
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const user = await Usuarios.findOne({ email: req.body.email }); //buscamos el usuario por el mail en la base de datos

  if (!user) {
    return res.status(404).send("El usuario y/o contraseña es incorrectos"); //si no existe el usuario, devolvemos un error
  }
  const match = await bcrypt.compare(req.body.password, user.password); //comparamos la contraseña ingresada con la que esta en la base de datos

  if (!match) {
    return res.status(401).send("El usuario y/o contraseña es incorrectos");
  }

  //creamos el token
  const token = jwt.sign(
    {
      // creamos el payload
      id: user._id,
      nombre: user.nombre,
      apellido: user.apellido
    },
    process.env.SECRET_KEY, //pasamos la clave secreta
    { expiresIn: "1D" } //tiempo de expiracion del token
  );

  res.header("auth-token", token).json({
    error: null,
    data: { token }
    });
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
  getUsuarios,
  login,
};
