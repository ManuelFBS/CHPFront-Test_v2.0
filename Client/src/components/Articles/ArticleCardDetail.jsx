import React from 'react';

export function ArticleCardDetail({ article }) {
  return (
    <div className="bg-zinc-700 w-3/4 mb-2 p-10 border-solid border-gray-100 border-2 rounded-lg">
      <div>
        <header className="flex justify-between">
          <div>
            <h4 className="text-slate-100 font-semibold italic text-lg mb-2">
              {article.title}
            </h4>
          </div>
        </header>
        <div>
          <p className="text-slate-100 font-tahoma">
            {article.article}
          </p>
        </div>
      </div>
    </div>
  );
}
