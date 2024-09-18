// models/projet.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Projet = sequelize.define('Projet', {
    numprojet: {
        type: DataTypes.STRING(3),
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING(30)
    },
    budget: {
        type: DataTypes.DECIMAL(10, 2)
    }
}, { timestamps: false });

module.exports = Projet;
