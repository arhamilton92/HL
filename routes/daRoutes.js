/** @format */

const express = require('express');
const { connect, daConnect } = require('../controllers/authController');
const { showGallery } = require('../controllers/galleryController');

const router = express.Router();

router.get('/', connect)
router.get('/gallery/:user', daConnect, showGallery)

module.exports = router;