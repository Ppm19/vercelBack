const mongoose = require('../db');

const AlumnoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: true },
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
