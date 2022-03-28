const { Router } = require('express');
const router = new Router();
const generController = require('../controllers/generController');

router.post('/', generController.create);
router.get('/', generController.getAll);
router.delete('/', generController.delete);

module.exports = router;
