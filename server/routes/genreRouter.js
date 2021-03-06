const { Router } = require('express');
const router = new Router();
const generController = require('../controllers/genreController');

router.post('/', generController.create);
router.get('/', generController.getAll);
router.delete('/:id', generController.delete);

module.exports = router;
