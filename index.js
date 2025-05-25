const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());

const productosRoutes = require('./routes/products.routes');
const usuariosRoutes = require('./routes/users.routes');

app.use('/productos', productosRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

