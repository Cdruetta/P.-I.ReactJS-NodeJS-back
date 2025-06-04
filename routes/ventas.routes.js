const express = require('express');
const router = express.Router()
const getAllSells = require('../controllers/ventas.controller')

router.get('/', getAllSells.getAllSells);

module.exports = router;