const express = require('express');

const router = express.Router();

const controller = require('../controllers/order');

router.get('/order/:id', controller.listOrders);
router.post('/order', controller.createOrder);
router.put('/order/:id', controller.updateOrder);
router.delete('/order/:id', controller.deleteOrder);

module.exports = router;