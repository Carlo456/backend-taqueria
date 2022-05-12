const express = require('express');
const router = express.Router();

const { getAllProducts, 
    getProduct,
    createProduct, 
    deleteProduct, 
    updateProduct, 
    rootProducto
} = require('../controllers/productController.js');

router.get('/', rootProducto);
router.get('/all-products', getAllProducts);
router.route('/:id')
    .get(getProduct)
    .post(createProduct)
    .delete(deleteProduct)
    .put(updateProduct);

module.exports = router;