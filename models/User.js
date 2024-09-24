// Importa mongoose para trabajar con MongoDB
const mongoose = require('mongoose');

// Define el esquema para el modelo de usuario
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Exporta el modelo de usuario basado en el esquema definido
module.exports = mongoose.model('User', UserSchema);
