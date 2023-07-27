const jwt = require("jsonwebtoken");

const comprobacionJwt = (req, res, next) => {
    const token = req.header("auth-token"); // obtenemos el token de los headers
    if(!token){
        return res.status(401).send("Acceso denegado");
    }
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // verificamos el token
        req.usuario = verifyToken; // guardamos el usuario en el req
        next(); // llamamos al siguiente middleware
    } catch (error) {
        res.status(400).send("Token no válido");
    }
};

module.exports = comprobacionJwt;