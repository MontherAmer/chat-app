const app = require('express')();

const authRouter = require('./auth');
const userRouter = require('./users');
const connectionRouter = require('./connections');

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/connections', connectionRouter);

module.exports = app;
