import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  article: {
    attributes: {
      title: string;
      content: any[];
      coverImage: {
        data: {
          attributes: {
            url: string;
          };
        } | null;
      };
      category: string;
      author: string;
      seo?: {
        metaTitle: string;
        metaDescription: string;
      };
    };
  };
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const { title, content, coverImage, category, author, seo } = article.attributes;

  const renderContent = (block: any) => {
    switch (block.__component) {
      case 'content.text-block':
        // Verificăm dacă conținutul este un array de obiecte sau un string
        if (Array.isArray(block.content)) {
          return block.content.map((item: any, index: number) => (
            <ReactMarkdown key={`${block.id}-${index}`}>{item.children[0].text}</ReactMarkdown>
          ));
        } else if (typeof block.content === 'string') {
          return <ReactMarkdown key={block.id}>{block.content}</ReactMarkdown>;
        }
        return null;
      case 'image.image-block':
        if (block.image?.data) {
          return (
            <figure key={block.id} className="my-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image.data.attributes.url}`}
                alt={block.caption || 'Image'}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              {block.caption && <figcaption className="text-center mt-2">{block.caption}</figcaption>}
            </figure>
          );
        }
        return null;
      case 'quote.citate':
        return (
          <blockquote key={block.id} className="border-l-4 border-gray-300 pl-4 my-4 italic">
            <p>{block.quote}</p>
            {block.author && <footer className="text-right mt-2">- {block.author}</footer>}
          </blockquote>
        );
      case 'content.refrain':
        return (
          <div key={block.id} className="bg-gray-100 p-4 my-4 rounded">
            <h3 className="font-bold mb-2">Refren:</h3>
            <ReactMarkdown>{typeof block.content === 'string' ? block.content : ''}</ReactMarkdown>
          </div>
        );
      default:
        console.log('Unknown component:', block.__component);
        return null;
    }
  };

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {coverImage?.data && (
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`}
          alt={title}
          width={800}
          height={400}
          className="w-full h-auto mb-6 rounded-lg"
        />
      )}
      <div className="mb-6">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{category}</span>
        <span className="text-gray-600">by {author}</span>
      </div>
      <div className="prose max-w-none">
        {content.map(renderContent)}
      </div>
      {seo && (
        <div className="mt-8 text-sm text-gray-500">
          <h2 className="text-lg font-semibold mb-2">SEO Metadata</h2>
          <p><strong>Title:</strong> {seo.metaTitle}</p>
          <p><strong>Description:</strong> {seo.metaDescription}</p>
        </div>
      )}
    </article>
  );
};

export default ArticleContent;