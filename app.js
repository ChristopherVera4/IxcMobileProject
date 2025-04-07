const express = require('express');
const { RequestTickets } = require('./Functions/Tickets');
const app = express();
const cors = require('cors'); // Importa el paquete CORS

// Middleware para parsear JSON
app.use(express.json());
const corsOptions = {
    origin: ['*'], // Dominios permitidos
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
  };
  
  app.use(cors(corsOptions)); // Configuración personalizada

app.get('/', (req, res) => {
    res.send('¡Hola mundo desde un servidor Node.js con Express!');
});

app.post('/Tickets', async (req, res) => {
    console.log("Iniciao de peticiones")
    const { correo, page } = req.body
    res.header('Access-Control-Allow-Origin', '*');
    const {data: response} = await RequestTickets(page, correo)
    res.status(200).send(response);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
