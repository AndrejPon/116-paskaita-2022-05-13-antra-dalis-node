const express = require('express');
const validation = require('../../middleware/validation');
const { userSchema } = require('../../models/auth');

const router = express.Router();

router.post('/register', validation(userSchema), (req, res) => {
  console.log(req.body);
  return res.send({ msg: 'Registration successful' });
});

router.post('/login', validation(userSchema), (req, res) => {
  console.log(req.body);
  return res.send({ msg: 'Login successful' });
});

module.exports = router;
