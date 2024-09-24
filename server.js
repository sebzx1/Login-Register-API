const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use(express.static('views')); // Para servir archivos estáticos

// Ruta para la raíz
app.get('/', (req, res) => {
    res.redirect('/login.html');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
