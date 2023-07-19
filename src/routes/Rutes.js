const express = require("express");
const router = express.Router();

const canchasController = require("../controllers/canchasController");

//Get
router.get("/canchas", canchasController.getAllCanchas);

router.get("/canchas/:id", canchasController.getCanchaById);

//Post

router.post("/canchas", canchasController.crearCancha);

//put

router.put("/canchas/:id", canchasController.updateCancha);

//delete

router.delete("/canchas/:id", canchasController.deleteCancha);

module.exports = router;
