import io from 'socket.io-client';

const socket = io('https://localhost:3000', {
  auth: {
    username: 'username',
    password: 'password',
  },
});

export default socket;
