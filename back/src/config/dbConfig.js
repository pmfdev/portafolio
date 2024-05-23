const mongoose = require('mongoose');

const username = '';
const password = '';
const dbName = '';
const dbHost = '';

// Modifica la URL de conexión para incluir el nombre de usuario y la contraseña
const mongoUrl = `mongodb://${username}:${password}@${dbHost}:27017/${dbName}`;

module.exports = async function connectToDatabase() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    throw err;
  }
};
