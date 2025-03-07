const express = require('express');

const { register, login } = require('../handlers/auth');
const response = require('../utils/response');

const router = express.Router();

router.post('/register', response(register));
router.post('/login', response(login));

module.exports = router;
