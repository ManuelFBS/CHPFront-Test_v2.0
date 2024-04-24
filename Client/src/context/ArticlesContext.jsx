import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getAllArticles } from '../api/articles';

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
  const [errors, setErrors] = useState([]);

  const getArticles = async () => {
    try {
      const res = await getAllArticles();

      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ArticlesContext.Provider
      value={{ articles, errors, getArticles }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
