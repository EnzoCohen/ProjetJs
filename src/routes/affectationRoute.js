// routes/affectationRoutes.js
const express = require('express');
const router = express.Router();
const affectationController = require('../controllers/affectationController');

// Route pour obtenir toutes les affectations
router.get('/affectation', affectationController.getAllAffectations);

module.exports = router;
