// routes/index.js
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

router.post('/api/users', (req, res) => {
  // Handle POST request to create a new user
  res.json({ message: 'User created' });
});

module.exports = router;
