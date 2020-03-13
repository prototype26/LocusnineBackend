const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController/userController');

router
   .route('/')
   .get(userController.getAllUsers)
   .post(userController.createUser);

router
   .route('/:email')
   .get(userController.getUser)
   .patch(userController.updateUser)
   .delete(userController.deleteUser);

module.exports = router;