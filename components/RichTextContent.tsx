import React from 'react';
import styles from './RichTextContent.module.css';

const RichTextContent = ({ content }) => {
  const renderNode = (node, index) => {
    if (typeof node === 'string') {
      return <span key={index}>{node}</span>;
    }

    switch (node.type) {
      case 'paragraph':
        return <p key={index} className={styles.paragraph}>{node.children.map((child, childIndex) => renderNode(child, `${index}-${childIndex}`))}</p>;
      case 'text':
        let text = node.text;
        if (node.bold) text = <strong key={index} className={styles.bold}>{text}</strong>;
        if (node.italic) text = <em key={index} className={styles.italic}>{text}</em>;
        if (node.underline) text = <u key={index} className={styles.underline}>{text}</u>;
        return text;
      default:
        return null;
    }
  };

  return <div className={styles.richText}>{content.map((node, index) => renderNode(node, index))}</div>;
};

export default RichTextContent;