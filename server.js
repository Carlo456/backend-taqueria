//importaciones de librerias 
const express = require('express');
const dotenv = require('dotenv').config();

//constantes de la app

const port = process.env.PORT || 5000;

//importacion de base de datos
require('./database.js');

//importaciones de rutas
const products = require('./routes/productRoutes.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// implementacion de las rutas
app.use('/api/products',products);


app.listen(port, () => { 
    console.log(`Server on port ${port}`);
});
