// routes/employeRoutes.js
const express = require('express');
const router = express.Router();
const employeController = require('../Controller/employeController');

// Route pour obtenir tous les employés
router.get('/employe', employeController.getAllEmployes);

module.exports = router;
