const Router = require('express');
const router = new Router();
const authorRouter = require('./authorRouter');
const bookRouter = require('./bookRouter');
const genreRouter = require('./genreRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/genre', genreRouter);
router.use('/author', authorRouter);
router.use('/books', bookRouter);

module.exports = router;
