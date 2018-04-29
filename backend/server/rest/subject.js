const express = require('express');
const router = express.Router();
const subject = require('../service/').subject;

router.get('/', subject.getAllMarks);

module.exports = router;