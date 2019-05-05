'use strict';

const path = require('path');

const express = require('express');
const app = express();

const userRouter = require('./routes/users');

const PORT = 3000;


app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(PORT, () => {
    console.log('Server listening on port ', PORT);
});