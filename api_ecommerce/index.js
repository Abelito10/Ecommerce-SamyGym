import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './router';

// CONEXIÓN A LA BASE DE DATOS
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/ecommerce_samygym";

mongoose.connect(dbUrl)
    .then(() => console.log("CONECTADO A LA BD EN EL PUERTO 27017"))
    .catch(err => console.error("ERROR AL CONECTARSE A LA BD:", err));

const app = express();

// Configuración de middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/', router);

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log("EL SERVIDOR SE EJECUTÓ PERFECTAMENTE EN EL PUERTO", app.get('port'));
});
