const express = require('express');
const productsRouter = express.Router();
const controller = require('../controllers/products');
const authMiddleware = require('../authMiddleware/auth/auth');

// Rota para obter todos os produtos
productsRouter.get('/', controller.getAllProducts);

// Rota para obter um produto específico pelo ID
productsRouter.get('/:id', controller.getProductById);

// Rota para criar um novo produto
productsRouter.post('/', authMiddleware, controller.createProduct);

// Rota para atualizar um produto existente pelo ID
productsRouter.put('/:id', authMiddleware, controller.updateProduct);

// Rota para excluir um produto pelo ID
productsRouter.delete('/:id', authMiddleware, controller.deleteProduct);

module.exports = productsRouter;
