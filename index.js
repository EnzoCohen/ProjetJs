const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./config/database');
const path = require('path');

// Configurer EJS comme moteur de vue
app.set('view engine', 'ejs');

// Importer le HomeController
const homeController = require('./src/Controller/homeController');

// Route principale (Page d'accueil) qui pointe vers la méthode index de HomeController
app.get('/', (req, res) => {
  res.redirect('/home');  // Rediriger vers la page d'accueil
});

// Route pour la page d'accueil
app.get('/home', homeController.index);

// Importer les routes supplémentaires
const employeRoutes = require('./src/routes/employeRoute');
const projetRoutes = require('./src/routes/projetRoute');
const affectationRoutes = require('./src/routes/affectationRoute');

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
