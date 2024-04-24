import axios from './axios.js';

export const getAllArticles = () =>
  axios.get('owner/articles');
