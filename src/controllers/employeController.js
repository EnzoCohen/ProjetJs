const Employe = require('../models/employe');

exports.getAllEmployes = async (req, res) => {
    try {
        const employes = await Employe.findAll();
        res.render('employe', { employes });
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des employés');
    }
};
