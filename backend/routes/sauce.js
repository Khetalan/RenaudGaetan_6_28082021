//On importe EXPRESS du package
const express = require('express');
//On crée un ROUTER pour la route vers EXPRESS
const router = express.Router();
//On importe le Model crée (Sauce.js)
const sauceCtrl = require('../controllers/sauce');
//On importe le middleware d'AUTH
const auth = require('../middleware/auth');
//On importe Multer
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;