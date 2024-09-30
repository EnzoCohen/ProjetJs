// models/employe.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Employe = sequelize.define('Employe', {
    numemp: {
        type: DataTypes.STRING(3),
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING(20)
    },
    prenom: {
        type: DataTypes.STRING(20)
    }
}, { timestamps: false });

module.exports = Employe;

///test