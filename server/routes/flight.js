const express = require('express');
const Flight = require('./models/Flight');
const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    try {
        res.status(201).json({ message: 'Flight created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ flights });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    try {
        res.status(200).json({ message: 'Flight updated successfully', updatedFlight });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    try {
        res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;