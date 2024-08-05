import React from 'react';
import ArticleImage from './ArticleImage';

const ArticleContent = ({ content }) => {
  const renderTextContent = (textContent) => {
    return textContent.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index}>{item.children.map(child => child.text).join('')}</p>;
        case 'heading':
          const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
          return <HeadingTag key={index}>{item.children.map(child => child.text).join('')}</HeadingTag>;
        default:
          return null;
      }
    });
  };

  const renderContentBlock = (block, index) => {
    switch (block.__component) {
      case 'content.text-block':
        return (
          <div key={index} className={styles.textBlock}>
            {renderTextContent(block.content)}
          </div>
        );
      case 'image.image-block':
        if (block.image?.data?.attributes) {
          const { url, width, height } = block.image.data.attributes;
          return (
            <div key={index} className={styles.imageWrapper}>
              <ArticleImage
                image={{
                  url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`,
                  width: width || 300, // Folosim o valoare implicită dacă width nu este disponibil
                  height: height || 300, // Folosim o valoare implicită dacă height nu este disponibil
                  alternativeText: block.image.data.attributes.alternativeText || '',
                }}
                caption={block.caption}
              />
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className={styles.articleContent}>
      {content.reduce((acc, block, index) => {
        if (index % 2 === 0) {
          acc.push(
            <div key={index} className={`${styles.contentRow} ${index % 4 === 0 ? styles.imageLeft : styles.imageRight}`}>
              {renderContentBlock(content[index], index)}
              {content[index + 1] && renderContentBlock(content[index + 1], index + 1)}
            </div>
          );
        }
        return acc;
      }, [])}
    </div>
  );
};

export default ArticleContent;