const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('App is running on port 3000');
});
const userRouter = require('./routes/user');
const notesRouter = require('./routes/notes');

app.use('/users', userRouter);
app.use('/notes', notesRouter);
module.exports = app;
