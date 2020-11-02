const app = require('express')();

const userRouter = require('./users');

app.use('/', userRouter);

module.exports = app;
