const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/users.json');

// Leer usuarios desde el archivo
const leerUsuarios = () => {
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '[]';
    return JSON.parse(data);
};

let usuarios = leerUsuarios();
console.log("usuarios", usuarios);

// Guardar usuarios en el archivo
const escribirUsuarios = (usuarios) => {
    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
};

// GET /usuarios - obtener todos los usuarios
const getUsuarios = (req, res) => {
    res.json({ data: usuarios, status: 200, mensaje: 'Lista de usuarios encontrada' });
};

// GET /usuarios/:id - obtener usuario por ID
const getUsuarioById = (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ status: 404, mensaje: 'Usuario no encontrado' });

    res.json({ data: usuario, status: 201, mensaje: 'Usuario encontrado' });
};

// POST /usuarios - crear nuevo usuario
const createUsuario = (req, res) => {
    console.log('BODY:', req.body);
    const { nombre, email, edad } = req.body;
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        email,
        edad
    };

    if (!email || email.replace(/\s/g, '') === '') {
    return res.status(400).json({ status: 404, mensaje: 'El campo "email" es obligatorio' });
}
    const emailExistente = usuarios.find(u => u.email === email); 
    if (emailExistente){
        return res.status(404).json({ status: 404, message : 'El email ya existe'})
    }

    usuarios.push(nuevoUsuario);
    escribirUsuarios(usuarios);
    res.status(201).json({ data: nuevoUsuario, status: 201, mensaje: 'Usuario creado' });
};

// PUT /usuarios/:id - actualizar un usuario
const updateUsuario = (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ status: 404, mensaje: 'Usuario no encontrado' });

    const { nombre, email, edad } = req.body;
    usuario.nombre = nombre || usuario.nombre;
    usuario.email = email || usuario.email;
    usuario.edad = edad || usuario.edad;

    escribirUsuarios(usuarios);
    res.json({ data: usuario, status: 200, mensaje: 'Usuario actualizado' });
};

// DELETE /usuarios/:id - eliminar un usuario
const deleteUsuario = (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ status: 404, mensaje: 'Usuario no encontrado' });

    usuarios = usuarios.filter(u => u.id !== usuario.id);
    escribirUsuarios(usuarios);
    res.json({ status: 200, mensaje: 'Usuario eliminado' });
};

// Exportar funciones
module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};
