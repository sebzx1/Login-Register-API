// Importa el modelo de usuario
const User = require('../models/User');

// Controlador para obtener todos los usuarios
exports.getUsers = async (req, res) => {
    // Busca todos los usuarios y selecciona el campo de contraseña
    try {
        const users = await User.find().select('+password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al recuperar usuario' });
    }
};

// Controlador para obtener un usuario por ID
exports.getUserById = async (req, res) => {
    
    // Busca el usuario por ID y excluye el campo de contraseña
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al recuperar usuario' });
    }
};
