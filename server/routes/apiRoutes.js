const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/status', apiController.status);
router.get('/items', apiController.items);
router.post('/items', apiController.postItems);
router.delete('/items/:id', apiController.deleteItems);

module.exports = router;