//route home
const express = require('express');
const router = express.Router();
const homeController = require('../Controller/homeController');

router.get('/',homeController.index);

module.exports = router;
