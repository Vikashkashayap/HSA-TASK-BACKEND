const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

// Create a new item
router.post('/add', itemController.addItem);

// Update an item
router.put('/update/:id', itemController.updateItem);

// Delete an item
router.delete('/delete/:id', itemController.deleteItem);

// Get all items
router.get('/get', itemController.getAllItems);

// Get a single item by ID
router.get('/get/:id', itemController.getItemById);

// Get status statistics
router.get('/status', itemController.getStatus);

// Update item status
router.put('/update-status/:id', itemController.updateStatus);

module.exports = router;
