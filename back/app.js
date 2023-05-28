const express = require('express');
const app = express();

app.use(express.json());

//importar rutas
const productos = require('./routes/products');

//definir la ruta en el navegador
app.use('/api', productos);

module.exports = app
