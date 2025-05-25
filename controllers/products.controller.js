const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/products.json')

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

//GET obtener todos los productos
const getProducts = (req, res) => {
    res.json({ data: products, status: 200, mensaje: 'Lista de productos encontrada' });
}

//GET obtener un producto por id
const getProductById = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id));
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' });

    res.json({ data: product, status: 200, mensaje: 'Producto encontrado' });
}

//POST crear un nuevo producto
const createProduct = (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;  // Asigna un nuevo id
    products.push(newProduct);  // Añade el nuevo producto
    escribirProducts(products);  // Guarda los productos en el archivo
    res.json({ data: newProduct, status: 201, mensaje: 'Producto creado' });
}

//PUT actualizar un producto
const updateProduct = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id));
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' });

    const { nombre, precio } = req.body;
    product.nombre = nombre || product.nombre;
    product.precio = precio || product.precio;

    // No es necesario añadir un nuevo producto, ya que estamos actualizando el existente
    escribirProducts(products);  // Guarda los productos actualizados en el archivo
    res.json({ data: product, status: 200, mensaje: 'Producto actualizado' });
}

//DELETE eliminar un producto
const deleteProduct = (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id));
    if (!product) return res.json({ status: 404, mensaje: 'Producto no encontrado' });

    // Filtramos y eliminamos el producto
    products = products.filter(item => item.id !== product.id);
    escribirProducts(products);  // Guarda los productos restantes en el archivo

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
