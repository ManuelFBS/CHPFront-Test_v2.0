import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import {
  createNewCommArtRequest,
  getAllArticles,
  getArticleByID,
} from '../api/articles';

export const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);

  if (!context)
    throw new Error(
      'useArticles must be used within an ArticlesProvider',
    );

  return context;
};

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [comment, setComment] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchArticles = async () => {
    try {
      const res = await getAllArticles();

      setArticles(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const fetchArticleByID = async (id) => {
    try {
      const res = await getArticleByID(id);

      setArticle(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const addNewComment = async (comment) => {
    try {
      const newComment = {
        uID: comment.uID,
        artID: comment.artID,
      };

      const res = await createNewCommArtRequest(
        userComment,
      );

      console.log(res.data);

      setComment(res.data);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        article,
        errors,
        addNewComment,
        fetchArticles,
        fetchArticleByID,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
