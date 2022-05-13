const express = require('express');

const router = express.Router();

router.get('/', (rec, res) => {
  return res.send({ msg: 'Auth Route' });
});

module.exports = router;
