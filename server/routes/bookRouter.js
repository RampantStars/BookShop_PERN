const { Router } = require('express');
const router = new Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);
router.delete('/', bookController.delete);

module.exports = router;
