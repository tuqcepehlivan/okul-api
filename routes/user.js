
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

const { userValidationRules } = require("../validations/userValidation");
const { handleValidation } = require("../middlewares/handleValidation");

router.get('/', userController.getAllUsers);
  

router.post('/', userValidationRules, handleValidation, userController.createUser);

router.get('/:id', userController.getUserById);
 


router.put('/:id', userValidationRules, handleValidation, userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.post("/login", userController.loginUser);

module.exports = router;
