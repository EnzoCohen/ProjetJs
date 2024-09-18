const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./config/database');

// Configurer EJS comme moteur de vue
app.set('view engine', 'ejs');

// Route principale (Page d'accueil)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Importer les routes
const employeRoutes = require('./src/routes/employeRoute.js');
const projetRoutes = require('./src/routes/projetRoute.js');
const affectationRoutes = require('./src/routes/affectationRoute.js');

// Utiliser les routes
app.use('/api/employes', employeRoutes);   // Route pour les employés
app.use('/api/projets', projetRoutes);     // Route pour les projets
app.use('/api/affectations', affectationRoutes); // Route pour les affectations

// Démarrer le serveur
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
});
