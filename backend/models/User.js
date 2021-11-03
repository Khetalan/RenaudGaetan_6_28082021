//on importe MONGOOSE (MongoDB)
const mongoose = require('mongoose');

//On importe le plugin "Unique validator" de mongoose pour les e-mail unique
const uniqueValidator = require('mongoose-unique-validator')

//On crée un schema d'utilisateur
const userSchema = mongoose.Schema({
    email : { type: String, required: true, unique: true },
    password : { type: String, required: true}
});

//On applique le validator au shema avant le modele
userSchema.plugin(uniqueValidator);

//On Exporte le schema sous forme de modele (User), avec le userschema
module.exports = mongoose.model('User', userSchema);