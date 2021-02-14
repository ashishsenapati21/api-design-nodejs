const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/auth.middleware');
const energyRouter = require('./energy.routes');

router.use('/energy', authHandler.validateUser, energyRouter);

router.use('/', (req, res, next) => res.send({message:'Welcome to Bosch Phantom Energy Management v2'}))

module.exports = router;