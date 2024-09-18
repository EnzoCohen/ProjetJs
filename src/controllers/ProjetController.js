// controllers/projetController.js
const Projet = require('../models/projet');

exports.getAllProjets = async (req, res) => {
    try {
        const projets = await Projet.findAll();
        res.render('projet', { projets });
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des projets');
    }
};
