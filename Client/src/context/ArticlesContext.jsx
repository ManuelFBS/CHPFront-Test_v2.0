import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import {
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

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        article,
        errors,
        fetchArticles,
        fetchArticleByID,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useReducer,
//   useState,
// } from 'react';
// import {
//   getAllArticles,
//   getArticleOwner,
//   getArticleUser,
// } from '../api/articles';

// export const ArticlesContext = createContext();

// export const useArticles = () => {
//   const context = useContext(ArticlesContext);

//   if (!context)
//     throw new Error(
//       'useArticles must be used within an ArticlesProvider',
//     );

//   return context;
// };

// export const ArticlesProvider = ({ children }) => {
//   const [articles, setArticles] = useState([]);
//   const [article, setArticle] = useState([]);
//   const [errors, setErrors] = useState([]);

//   const getArticles = async () => {
//     try {
//       const res = await getAllArticles();

//       setArticles(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getArticleByID = async (id) => {
//     try {
//       const res = await getArticleOwner(id);

//       setArticle(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <ArticlesContext.Provider
//       value={{
//         article,
//         articles,
//         errors,
//         getArticles,
//         getArticleByID,
//       }}
//     >
//       {children}
//     </ArticlesContext.Provider>
//   );
// };
