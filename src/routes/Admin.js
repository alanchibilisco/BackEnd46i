const express = require("express");
const router = express.Router();

router.get("/admin", (req, res) => {
  res.json({
    data: {
      title: "Ruta privada",
      user: req.usuario,
    },
  });
});

module.exports = router;