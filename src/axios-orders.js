import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-f0d41-default-rtdb.firebaseio.com/',
});

export default instance;
