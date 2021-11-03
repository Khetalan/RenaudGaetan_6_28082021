//On importe EXPRESS du package
const express = require('express');
//on importe BORDY-PARSER 
const bodyParser = require('body-parser');
//on importe MONGOOSE (MongoDB)
const mongoose = require('mongoose');

//On importe le ROUTER
const sauceRoutes = require('./routes/sauce');
//On importe la route pour les Utilisateur
const userRoutes = require('./routes/user');

//
const path = require('path');

mongoose.connect('mongodb+srv://arseal1:xilmor@cluster0.vcssc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))
;

//On appel la fonction EXPRESS qui va nous crée une APP
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

//Ont Exporte APP pour avoir l'accès via d'autres fichier.
module.exports = app;


