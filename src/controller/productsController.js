const {
  getAllProducts,
  createProduct,
  deleteProductById,
  updateProductById,
  getProductById
} = require('../models/productsModels');

const getAllProduts = async (req, res) => {
  try {
    const product = await getAllProducts();

    res.status(200).json({
      message: `Get All Products Success`,
      data: product
    });
  } catch (error) {
    res.send(error.message);
  }
};

const getProductId = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await getProductById(productId);
    res.status(200).json({
      message: `Get product ${productId}`,
      data: product
    });
  } catch (error) {
    res.status(404).json({
      message: `Product not found`
    });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const newProductData = req.body;

    const product = await createProduct(newProductData);

    res.status(201).json({
      message: `Create new product success`,
      data: product
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await deleteProductById(parseInt(productId));
    res.status(200).json({
      message: `DELETE product success`,
      data: product
    });
  } catch (error) {
    res.status(404).json({
      message: `Product Not Found`
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    const updatedProduct = await updateProductById(productId, productData);

    res.status(200).json({
      message: `UPDATE success`,
      data: updatedProduct
    });
  } catch (error) {
    res.status(400).json({
      message: `UPDATE failed`,
      error: error.message
    });
  }
};

module.exports = {
  getAllProduts,
  getProductId,
  createNewProduct,
  deleteProduct,
  updateProduct
};
