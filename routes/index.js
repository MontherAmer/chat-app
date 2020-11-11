const app = require('express')();

const authRouter = require('./auth');
const userRouter = require('./users');
const contactsRouter = require('./contacts');

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/contact', contactsRouter);

module.exports = app;
