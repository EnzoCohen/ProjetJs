const { Sequelize } = require('sequelize');

// Configuration de la base de données
const sequelize = new Sequelize('tp_csi_db', 'user', 'userpassword', {
    host: 'localhost', // Le nom du service MySQL dans Docker Compose
    dialect: 'mysql', // Type de base de données
    port: 3306, // Port exposé dans le fichier Docker Compose
    logging: false, // Désactiver les logs SQL
});

// Tester la connexion à la base de données
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
    }
}

// Appeler la fonction pour tester la connexion
testConnection();

module.exports = sequelize;
