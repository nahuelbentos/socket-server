import Server from './classes/server';
import router from './routes/router';
import express from 'express';
import cors from 'cors';
import socketIO from 'socket.io';

const server = Server.instance;
// BodyParser

server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

// CORS

server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router);

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
