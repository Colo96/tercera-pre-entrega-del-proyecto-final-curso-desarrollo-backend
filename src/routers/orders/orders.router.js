const { Router } = require("express");
const OrdersController = require("../../controllers/orders.controller");

const router = Router();

router.get('/', OrdersController.getOrders);
router.get('/:oid', OrdersController.getOrderById);
router.post('/', OrdersController.createOrder);
router.put('/:oid', OrdersController.updateOrderById);
router.delete('/:oid', OrdersController.deleteOrderById);

module.exports = router;