import axios from './axios.js';

export const loginRequest = (user) =>
  axios.post('/auth/signin', user);

export const registerRequest = (user) =>
  axios.post('/auth/signup', user);

export const verifyTokenRequest = () =>
  axios.get('/auth/verify');
