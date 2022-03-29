const Router = require('express');
const router = new Router();
const authorRouter = require('./authorRouter');
const bookRouter = require('./bookRouter');
const generRouter = require('./generRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/gener', generRouter);
router.use('/author', authorRouter);
router.use('/books', bookRouter);

module.exports = router;
