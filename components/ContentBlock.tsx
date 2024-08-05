// components/ContentBlock.tsx

import React from 'react';
import Image from 'next/image';
import RichTextContent from './RichTextContent';

const ContentBlock = ({ block, styles }) => {
  console.log('ContentBlock received:', block); // Pentru debugging

  switch (block.__component) {
    case 'content.text-block':
      return (
        <div className={styles.articleParagraph}>
          {Array.isArray(block.content) ? (
            block.content.map((item, index) => {
              if (item.type === 'paragraph') {
                return <p key={index}>{item.children.map(child => child.text).join('')}</p>;
              } else if (item.type === 'heading') {
                const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
                return <HeadingTag key={index} className={styles[`heading${item.level}`]}>{item.children.map(child => child.text).join('')}</HeadingTag>;
              }
              return null;
            })
          ) : (
            <RichTextContent content={block.content} />
          )}
        </div>
      );

    case 'image.image-block':
      if (block.image?.data) {
        const imageData = block.image.data.attributes;
        return (
          <figure className={styles.articleFigure}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageData.url}`}
              alt={block.caption || imageData.alternativeText || ''}
              width={imageData.width}
              height={imageData.height}
              layout="responsive"
              className={styles.articleImage}
            />
          </figure>
        );
      }
      return null;

    case 'quote.citate':
      return (
        <blockquote className={styles.articleQuote}>
          <p>{block.text}</p>
          {block.autor && <footer className={styles.quoteAuthor}>— {block.autor}</footer>}
        </blockquote>
      );

    case 'content.refrain':
      return (
        <div className={`${styles.articleParagraph} ${styles.refrain}`}>
          {block.text}
        </div>
      );

    default:
      console.warn('Unknown block type:', block.__component);
      return null;
  }
};

export default ContentBlock;