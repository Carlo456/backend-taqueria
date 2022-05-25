const asyncHandler = require('express-async-handler');

const rootProducto = (req, res) => {
    res.status(200).send('<h1>Nada que ver aqui</h1>');
}

const getAllProducts = asyncHandler(async (req, res) => {
    res.status(200).send([
        {
            'nombre': 'taco',
            'precio': 12            
        },{
            'nombre': 'burro',
            'precio': 18
        },{
            'nombre': 'campechana',
            'precio': 35
        }
    ]);
});

const getProduct = asyncHandler(async (req, res) =>{
    let id =  req.params.id;
    res.status(200).send({
        'id': id,
        'nombre': 'taco',
        'precio': 12
    });
});

const createProduct = asyncHandler(async (req, res) => {
    let product = req.body;
    if(!product.name || !product.price){
        res.status(400)
        throw new Error('Porfavor rellene los valores de precio o producto...')
    } else {
        res.status(200).json({
            message: "Se registro el producto exitosamente"
        });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    let id =  req.params.id;
    res.send({
        'id': id,
        'nombre': 'taco bell',
        'precio': 12
    },{
        'Message': `Producto ${id} actualizado`
    });
});

const deleteProduct = asyncHandler(async (req, res) =>{
    let id =  req.params.id;
    res.status(200).send({ 'Message': `Producto ${id} eliminado`});
});

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    rootProducto
}