const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Imp

const connectToDatabase = require('./config/dbConfig');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(cors({ origin: ['http://localhost:5000', 'http://pmfdev.es:8090/', 'http://localhost:3000', '5.250.185.21:3000'] }));



// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Conectar a la base de datos MongoDB
connectToDatabase();

// Usar las rutas definidas en routes/index.js
app.use('/', routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
