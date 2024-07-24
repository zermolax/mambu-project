import React from 'react';
import Image from 'next/image';
import RichTextContent from './RichTextContent';

const ContentBlock = ({ block }) => {
  switch (block.__component) {
    case 'content.text-block':
      return <RichTextContent content={block.content} />;

    case 'image.image-block':
      if (block.image?.data) {
        return (
          <figure className="my-4">
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
        <blockquote className="article-quote">
          <p>{block.text}</p>
          {block.autor && <footer>— {block.autor}</footer>}
        </blockquote>
      );

    case 'content.refrain':
      return (
        <div className="bg-gray-100 p-4 my-4 rounded">
          <h3 className="font-bold mb-2">Refren:</h3>
          <RichTextContent content={block.content} />
        </div>
      );

    default:
      console.log('Unknown component:', block.__component);
      return null;
  }
};

export default ContentBlock;