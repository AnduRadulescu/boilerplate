const express = require('express');
const router = express.Router();
const student = require('../service/').student;

router.post('/login', student.login);

module.exports = router;