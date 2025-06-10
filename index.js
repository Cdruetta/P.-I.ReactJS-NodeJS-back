const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;
app.use(cors());
app.use(express.json());

const productosRoutes = require('./routes/products.routes');
const usuariosRoutes = require('./routes/users.routes');
const ventasRoutes = require('./routes/ventas.routes');

app.use('/productos', productosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/ventas', ventasRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

