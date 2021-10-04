/** @format */

const express = require('express');
const { daClientAccess } = require('../controllers/authController');

const router = express.Router();

router.get('/', daClientAccess)

module.exports = router;