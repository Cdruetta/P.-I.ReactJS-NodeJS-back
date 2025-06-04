const {Venta, Usuario, Producto} = require('../models');

const getAllSells = async (req, res) => {
    try { 
        const ventas= await Venta.findAll({
            include: 
                [Usuario, Producto],
        });
        res.json({status: 200, data: ventas});

        
    } catch (error) {
        res.status(500).json({status: 500, message: 'Error al obtener las ventas', error: error});

    } 
}
    module.exports = {
        getAllSells
};
