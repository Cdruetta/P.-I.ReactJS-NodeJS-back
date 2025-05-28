const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/products.json');
const { Producto } = require('../models/');

// Función para leer productos del archivo
const leerProducts = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data); 
}

let products = leerProducts();
console.log("products", products);

// Función para guardar los productos en el archivo
const escribirProducts = (products) => {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}

// GET obtener un producto por id
const getProductById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ data: producto, status: 200, message: 'Producto obtenido de manera exitosa' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno al obtener producto', error: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json({ data: productos, status: 200, message: 'Productos obtenidos de manera exitosa' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error: error.message });
    }
}

// POST crear un nuevo producto
const createProduct = async (req, res) => {
    const { nombre, precio } = req.body;
    try {
        if (!nombre || !precio) {
            return res.status(400).json({ status: 400, mensaje: 'Nombre y precio son requeridos' });
        }
        const nuevoProducto = await Producto.create({ nombre, precio });
        res.status(201).json({ data: nuevoProducto, status: 201, mensaje: 'Producto creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
}

// PUT actualizar un producto
const updateProduct = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id));
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' });

    const { nombre, precio } = req.body;
    product.nombre = nombre || product.nombre;
    product.precio = precio || product.precio;

    escribirProducts(products);
    res.json({ data: product, status: 200, mensaje: 'Producto actualizado' });
}

// DELETE eliminar un producto
const deleteProduct = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id));
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' });

    products = products.filter(item => item.id !== product.id);
    escribirProducts(products);

    res.json({ status: 201, mensaje: 'Producto eliminado' });
}

// Exportar los controladores
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
