const { Router } = require('express');
const usersController = require('./../controllers/usersController.js')

const router = new Router();


router.get('/', usersController.index);
router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUsers);
router.put('/users/:id', usersController.updateUsers);
router.delete('/users/:id',usersController.deleteUsers)

module.exports = router;