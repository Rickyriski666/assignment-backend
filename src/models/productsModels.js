const prisma = require('../config/db');

const getAllProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

const getProductById = async productId => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId
    }
  });

  return product;
};

const createProduct = async newProductData => {
  const product = await prisma.product.create({
    data: {
      name: newProductData.name,
      price: newProductData.price,
      description: newProductData.description,
      image: newProductData.image
    }
  });

  return product;
};

const deleteProductById = async productId => {
  const product = await prisma.product.delete({
    where: {
      id: productId
    }
  });

  return product;
};

const updateProductById = async (productId, newProductData) => {
  const product = await prisma.product.update({
    where: {
      id: productId
    },
    data: {
      name: newProductData.name,
      price: newProductData.price,
      description: newProductData.description,
      image: newProductData.image
    }
  });

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById
};
