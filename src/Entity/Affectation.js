// models/affectation.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Employe = require('./employe');
const Projet = require('./projet');

const Affectation = sequelize.define('Affectation', {
    numemp: {
        type: DataTypes.STRING(3),
        references: {
            model: Employe,
            key: 'numemp'
        }
    },
    numprojet: {
        type: DataTypes.STRING(3),
        references: {
            model: Projet,
            key: 'numprojet'
        }
    },
    heures: {
        type: DataTypes.INTEGER
    }
}, { timestamps: false });

Employe.belongsToMany(Projet, { through: Affectation, foreignKey: 'numemp' });
Projet.belongsToMany(Employe, { through: Affectation, foreignKey: 'numprojet' });

module.exports = Affectation;
