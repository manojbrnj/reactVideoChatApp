import io from 'socket.io-client';

const socket = io('https://react-video-chat-backend.onrender.com', {
  auth: {
    username: 'username',
    password: 'password',
  },
});

export default socket;
