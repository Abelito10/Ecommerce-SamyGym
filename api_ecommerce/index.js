import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
// import router from './routes/router.js'; // Descomenta e importa tu enrutador

// CONEXION A LA BASE DE DATOS
const dbUrL = "mongodb://localhost:27017/ecommerce_samygym";

mongoose
  .connect(dbUrL)
  .then(() => console.log("CONECTADO A LA BD EN EL PUERTO 27017"))
  .catch((err) => console.log("Error al conectar a la base de datos:", err));

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/', router); // Descomenta cuando tengas el enrutador

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`EL SERVIDOR SE EJECUTO PERFECTAMENTE EN EL PUERTO ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} ya está en uso. Por favor, utiliza otro puerto.`);
  } else {
    console.error('Error al iniciar el servidor:', err);
  }
});
