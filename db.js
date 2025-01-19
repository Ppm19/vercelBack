const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/roberExpress')
  .then(() => {
    console.log('Conexión a MongoDB exitosa.');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

module.exports = mongoose;
