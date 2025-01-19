<<<<<<< HEAD
const mongoose = require('../db');

const AlumnoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: true },
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
=======
const mongoose = require('../db');

const AlumnoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: true },
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
>>>>>>> 171e33f15144b6cf407379edf6c9749453bee35e
