const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// GET all documents
router.get('/', async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET document by slug
router.get('/:slug', async (req, res) => {
    try {
        const document = await Document.findOne({ slug: req.params.slug });
        if (!document) return res.status(404).json({ message: 'Document not found' });
        res.json(document);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
