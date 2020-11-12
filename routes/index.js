const app = require('express')();

const authRouter = require('./auth');
const userRouter = require('./users');
const contactsRouter = require('./contacts');
const groupRouter = require('./groups');

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/contact', contactsRouter);
app.use('/group', groupRouter);

module.exports = app;
