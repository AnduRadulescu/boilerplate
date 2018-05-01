const express = require('express');
const router = express.Router();
const student = require('../service/').student;

router.post('/login', student.login);
router.post('/sync', student.sync);

module.exports = router;