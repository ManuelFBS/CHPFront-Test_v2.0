import axios from './axios.js';

export const getAllUsers = () => axios.get('/users');

// export const getUserByEmailOrUsername = (user) =>
//   axios.post('/auth/signup', user);

// export const updateUser = (user) =>
//   axios.post('/auth/signup', user);

// export const deleteUser = (user) =>
//   axios.post('/auth/signup', user);

export const verifyTokenRequest = () =>
  axios.get('/auth/verify');
