const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of all user is this');
});

router.post('/signup', (req, res) => {
  res.send('New user created');
});

module.exports = router;
