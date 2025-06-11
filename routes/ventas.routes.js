const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

router.get('/', ventasController.getAllSells);         
router.get('/:id', ventasController.getSellById);       
router.post('/', ventasController.createSell);          

module.exports = router;
