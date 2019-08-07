const { Router } = require('express');
// const usersController = require('./../controllers/usersController.js')

const router = new Router();
const bookControl = require('../controllers').book;

router.get('/api/book', bookControl.list);
router.post('/api/book',bookControl.add);

module.exports = router;