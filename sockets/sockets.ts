import { Socket } from 'socket.io';

export const desconectar = (cliente: Socket) => {
  cliente.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
};

export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
  cliente.on('mensaje', (payload: { de: string; cuerpo: string }) => {
    console.log('escuche el mensaje, el payload es: ', payload);

    io.emit('mensaje-nuevo', payload);
  });
};
