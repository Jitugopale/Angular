const express = require('express');
const Category = require('../models/categoryModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const [categories] = await Category.getAll();
    res.json(categories);
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    await Category.create(name);
    res.send('Category created');
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    await Category.update(id, name);
    res.send('Category updated');
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Category.delete(id);
    res.send('Category deleted');
});

module.exports = router;
