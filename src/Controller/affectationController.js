// controllers/affectationController.js
const Affectation = require('../Entity/Affectation');
const Employe = require('../Entity/Employe');
const Projet = require('../Entity/Projet');

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
