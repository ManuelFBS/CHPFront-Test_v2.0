import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getAllArticles,
  getArticleOwner,
  getArticleUser,
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
  const [errors, setErrors] = useState([]);

  const getArticles = async () => {
    try {
      const res = await getAllArticles();

      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getArticleOwnerByID = async (id) => {
    try {
      const res = await getArticleOwner(id);

      setArticle(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        errors,
        getArticles,
        getArticleOwnerByID,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
