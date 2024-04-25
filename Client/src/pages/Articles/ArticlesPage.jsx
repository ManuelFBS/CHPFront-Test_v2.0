import React, { useEffect, useState } from 'react';
import { useArticles } from '../../context/ArticlesContext';
import { ArticleCard } from '../../components/Articles/ArticleCard';
import { ArticleCardDetail } from '../../components/Articles/ArticleCardDetail';

export function ArticlesPage() {
  const { getArticles, articles } = useArticles();
  const [selectedArticle, setSelectedArticle] =
    useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  // Manejar clic en una tarjeta de artículo...
  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {selectedArticle ? (
        <div className="flex justify-center items-center">
          <ArticleCardDetail article={selectedArticle} />
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
                article={article}
                key={article.id}
                onClick={() => handleCardClick(article)}
              />
            ))}
          </div>
        </div>
      )}
    </div>

    // <div className="grid grid-cols-3 gap-2">
    //   {articles.map((article) => (
    //     <ArticleCard
    //       article={article}
    //       key={article.id}
    //       onClick={() => handleCardClick(article)}
    //     />
    //   ))}
    // </div>
  );
}
