const express = require('express');
const {
  getAllProduts,
  getProductId,
  createNewProduct,
  deleteProduct,
  updateProduct
} = require('../controller/productsController');

const productsRouter = express.Router();

productsRouter.get('/products', getAllProduts);

productsRouter.get('/products/:id', getProductId);

productsRouter.post('/products', createNewProduct);

productsRouter.delete('/products/:id', deleteProduct);

productsRouter.patch(`/products/:id`, updateProduct);

module.exports = productsRouter;
