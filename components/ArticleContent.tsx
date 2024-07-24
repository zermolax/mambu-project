import React from 'react';
import ContentBlock from './ContentBlock';

interface ArticleContentProps {
  article: {
    attributes: {
      title: string;
      content: any[];
      category: string;
      author: string;
    };
  };
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const { title, content, category, author } = article.attributes;

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="mb-6">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{category}</span>
        <span className="text-gray-600">by {author}</span>
      </div>
      <div className="prose max-w-none">
        {content.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
      </div>
    </article>
  );
};

export default ArticleContent;