import React, { useEffect, useState } from 'react';
import { useArticles } from '../../context/ArticlesContext';
import { ArticleCard } from '../../components/Articles/ArticleCard';

export function ArticlesPage() {
  const { getArticles, articles } = useArticles();

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
}
