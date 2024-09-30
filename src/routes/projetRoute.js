// routes/projetRoutes.js
const express = require('express');
const router = express.Router();
const projetController = require('../Controller/ProjetController');

// Route pour obtenir tous les projets
router.get('/projet', projetController.getAllProjets);

module.exports = router;


