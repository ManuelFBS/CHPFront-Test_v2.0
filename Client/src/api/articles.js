import axios from './axios.js';

export const getAllArticles = () =>
  axios.get('owner/articles');

export const getArticle = (title) =>
  axios.get(`users/article/${title}`);
