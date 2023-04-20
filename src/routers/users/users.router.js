const { Router } = require("express");
const UserController = require("../../controllers/users.controller");

const router = Router();

router.get('/', UserController.getUsers);
router.get('/:uid', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:uid', UserController.updateUserById);
router.delete('/:uid', UserController.deleteUserById);

module.exports = router;