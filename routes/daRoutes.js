/** @format */

const express = require('express');
const { connect, daConnect } = require('../controllers/authController');
const { showGallery, getMasterlist } = require('../controllers/galleryController');
const { createTraits } = require('../controllers/traitsController');

const router = express.Router();

router.get('/', connect)
router.get('/gallery/:user', daConnect, showGallery)
router.get('/masterlist', daConnect, getMasterlist)

router.post('/traits', createTraits)

module.exports = router;