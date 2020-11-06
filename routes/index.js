const app = require('express')();

const userRouter = require('./users');
const threadRouter = require('./threads');

app.use('/', userRouter);
app.use('/thread', threadRouter);

module.exports = app;
