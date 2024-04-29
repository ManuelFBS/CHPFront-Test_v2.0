import axios from './axios.js';

export const getAllArticles = () =>
  axios.get('/owner/articles');

export const getArticleByID = (id) =>
  axios.get(`/owner/article/find/${id}`);

// export const getArticleUser = (id) =>
//   axios.get(`/users/article/find/${id}`);
