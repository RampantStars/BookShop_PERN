const { Router } = require('express');
const router = new Router();
const authorController = require('../controllers/autorController');

router.post('/', authorController.create);
router.get('/', authorController.getAll);
router.get('/:id', authorController.getOne);
router.delete('/', authorController.delete);

module.exports = router;
