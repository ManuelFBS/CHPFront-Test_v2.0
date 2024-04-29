import React, { useEffect, useState } from 'react';
import { useArticles } from '../../context/ArticlesContext';
import { ArticleCard } from '../../components/Articles/ArticleCard';
import { ArticleCardDetail } from '../../components/Articles/ArticleCardDetail';

export function ArticlesPage() {
  const {
    articles,
    fetchArticles,
    fetchArticleByID,
    article,
    errors,
  } = useArticles();
  const [selectedArticle, setSelectedArticle] =
    useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleCardClick = async (article) => {
    await fetchArticleByID(article.id);
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {selectedArticle ? (
        <div className="flex justify-center items-center">
          <ArticleCardDetail article={article} />
          <button
            className="bg-transparent text-4xl ml-3 text-green-300 hover:text-green-500 mt-4"
            onClick={handleBackToList}
          >
            Volver
          </button>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-3 gap-2">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleCardClick(article)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { useArticles } from '../../context/ArticlesContext';
// import { ArticleCard } from '../../components/Articles/ArticleCard';
// import { ArticleCardDetail } from '../../components/Articles/ArticleCardDetail';

// export function ArticlesPage() {
//   const { getArticles, getArticleByID, articles } =
//     useArticles();
//   const [selectedArticle, setSelectedArticle] =
//     useState(null);

//   useEffect(() => {
//     getArticles();
//   }, []);

//   // Manejar click en una tarjeta de artículo...
//   const handleCardClick = (article) => {
//     // getArticleByID(id);
//     setSelectedArticle(article);
//   };

//   const handleBackToList = () => {
//     setSelectedArticle(null);
//   };

//   return (
//     <div>
//       {selectedArticle ? (
//         <div className="flex justify-center items-center">
//           <ArticleCardDetail article={selectedArticle} />
//           <button
//             className="bg-transparent text-4xl ml-3 text-green-300 hover:text-green-500 mt-4"
//             onClick={handleBackToList}
//           >
//             Volver
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className="grid grid-cols-3 gap-2">
//             {articles.map((article) => (
//               <ArticleCard
//                 article={article}
//                 key={article.id}
//                 onClick={() => handleCardClick(article)}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
