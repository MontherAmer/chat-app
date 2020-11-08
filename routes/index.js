const app = require('express')();

const userRouter = require('./users');
const connectionRouter = require('./connections');

app.use('/', userRouter);
app.use('/connections', connectionRouter);

module.exports = app;
