/** @format */

const express = require('express');
const { daConnect } = require('../controllers/authController');
const { showGallery } = require('../controllers/galleryController');

const router = express.Router();

router.get('/', daConnect, showGallery)

module.exports = router;