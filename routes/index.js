const app = require('express')();

const authRouter = require('./auth');
const userRouter = require('./users');
const groupRouter = require('./groups');
const messageRouter = require('./messages');
const contactsRouter = require('./contacts');

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);
app.use('/message', messageRouter);
app.use('/contact', contactsRouter);

module.exports = app;
