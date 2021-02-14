const express = require("express");
const router = express.Router();
const energyController = require('../controller/energy.controller');

router.get('/total', energyController.energy);

router.use('/', (req, res, next) => res.send({message:'Welcome to Energy Index'}));

module.exports = router;