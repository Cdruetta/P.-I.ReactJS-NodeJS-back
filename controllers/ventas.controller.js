const { Venta, Usuario, Producto } = require('../models');

// Obtener todas las ventas
const getAllSells = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: [Usuario, Producto],
    });
    res.json({ status: 200, data: ventas });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener las ventas',
      error: error.message,
    });
  }
};

// Obtener una venta por ID
const getSellById = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id, {
      include: [Usuario, Producto],
    });

    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }

    res.json({
      status: 200,
      data: venta,
      message: 'Venta obtenida exitosamente',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener la venta',
      error: error.message,
    });
  }
};

// Crear una venta nueva
const createSell = async (req, res) => {
  const { usuarioId, productoId, cantidad, total, fecha } = req.body;

  try {
    if (!usuarioId || !productoId || !cantidad || !total || !fecha) {
      return res
        .status(400)
        .json({ message: 'Faltan campos obligatorios' });
    }

    const newSale = await Venta.create({
      usuarioId,
      productoId,
      cantidad,
      total,
      fecha,
    });

    res.json({
      status: 201,
      data: newSale,
      message: 'Venta creada exitosamente',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear la venta',
      error: error.message,
    });
  }
};

// Exportar controladores
module.exports = {
  getAllSells,
  getSellById,
  createSell,
};
