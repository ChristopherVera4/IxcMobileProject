const express = require('express');
const { RequestTickets, getCountTicketsByStatus, TicketStatus } = require('./Functions/Tickets');
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
    const { correo, page } = req.body
    res.header('Access-Control-Allow-Origin', '*');
    const {data: response} = await RequestTickets(page, correo)
    res.status(200).send(response);
});

app.post('/Tickets/counts', async (req, res) => {
    try {
      const statuses = ['new', 'open', 'pending', 'hold', 'solved', 'closed'];
      const { correo } = req.body

      const results = await Promise.all(
        statuses.map((status) => getCountTicketsByStatus(correo,status))
      );
  
      res.status(200).json({
        result: results
      });

    } catch (error) {
      console.log('Error getting ticket counts', error);
      res.status(500).json({ error: 'Error getting ticket counts' });
    }
  });

app.listen(3000, () => {
    console.log('Servidor Iniciado');
});
