const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const { page = 1, size = 10 } = req.query;
    const offset = (page - 1) * size;
    const [products] = await Product.getAllPaginated(parseInt(offset), parseInt(size));
    res.json(products);
});

router.post('/', async (req, res) => {
    const { name, categoryId } = req.body;
    await Product.create(name, categoryId);
    res.send('Product created');
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    await Product.update(id, name, categoryId);
    res.send('Product updated');
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Product.delete(id);
    res.send('Product deleted');
});

module.exports = router;
