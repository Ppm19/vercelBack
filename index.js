const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const Alumno = require('./models/Alumno'); // Importar modelo

// Configuración de conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/roberExpress')
  .then(() => {
    console.log('Conexión a MongoDB exitosa.');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'https://vercel-front-sage.vercel.app', // URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Rutas de la API
app.get('/alumnos', async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/alumnos/:id', async (req, res) => {
    try {
        const alumno = await Alumno.findOne({ id: req.params.id });
        if (alumno) {
            res.json(alumno);
        } else {
            res.status(404).json({ error: 'Alumno no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/alumnos', async (req, res) => {
    try {
        const { id, nombre, apellido, telefono } = req.body;
        const nuevoAlumno = new Alumno({ id, nombre, apellido, telefono });
        await nuevoAlumno.save();
        res.status(201).json(nuevoAlumno);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app;
