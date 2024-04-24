import React from 'react';
import { Button } from '../UI';

export function ArticleCard({ article }) {
  const truncateText = (text, maxLines) => {
    const lines = text.split('\n');
    const truncated = lines.slice(0, maxLines).join('\n');
    return truncated;
  };

  // Limitar el texto del artículo a las primeras 5 líneas
  const truncatedArticle = truncateText(article.article, 5);

  return (
    <div className="bg-gray-300 max-w-md w-full p-10 rounded-lg">
      <div>
        <header className="flex justify-between">
          <div>
            <h4 className="text-slate-800 font-semibold italic text-lg mb-2">
              {article.title}
            </h4>
            <p className="text-slate-700 font-tahoma">
              {truncatedArticle}
              {article.article.length >
                truncatedArticle.length && '...'}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}
