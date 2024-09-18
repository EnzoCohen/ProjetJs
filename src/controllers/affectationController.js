// controllers/affectationController.js
const Affectation = require('../models/affectation');
const Employe = require('../models/employe');
const Projet = require('../models/projet');

exports.getAllAffectations = async (req, res) => {
    try {
        const affectations = await Affectation.findAll({
            include: [Employe, Projet]
        });
        res.render('affectation', { affectations });
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des affectations');
    }
};
