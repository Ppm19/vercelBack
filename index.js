const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('./db');

const app = express();

const corsOptions = {
    origin: 'https://vercel-front-sage.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

const Alumno = require('./models/Alumno');

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
