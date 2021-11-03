const express = require('express');

const router = express.Router();
//Il nous faut le controler pour associer les fonction au differente route
const userCtrl = require('../controllers/user');

//On crée les routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;