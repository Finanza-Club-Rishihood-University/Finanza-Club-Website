const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// GET all members
router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET member by slug (or id if slug not present, but sticking to pattern)
router.get('/:slug', async (req, res) => {
    try {
        const member = await Member.findOne({ slug: req.params.slug });
        if (!member) return res.status(404).json({ message: 'Member not found' });
        res.json(member);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
