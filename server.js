//importaciones de librerias 
const express = require('express');
const dotenv = require('dotenv').config();

//importaciones de la app

const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
 
//importacion de base de datos
require('./database.js');

//importaciones de rutas
const products = require('./routes/productRoutes.js');

//declare express
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

// implementacion de las rutas
app.use('/api/products',products);


app.listen(port, () => { 
    console.log(`Server on port ${port}`);
});
