const { Router } = require("express");
const BusinessesController = require("../../controllers/businesses.controller");

const router = Router();

router.get('/', BusinessesController.getBusinesses);
router.get('/:bid', BusinessesController.getBusinessById);
router.post('/', BusinessesController.createBusiness);
router.post('/:bid/products', BusinessesController.addProductToBusiness);
router.put('/:bid', BusinessesController.updateBusinessById);
router.delete('/:bid', BusinessesController.deleteBusinessById);

module.exports = router;