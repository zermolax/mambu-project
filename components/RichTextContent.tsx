import React from 'react';

const RichTextContent = ({ content }) => {
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }

  const renderNode = (node, index) => {
    switch (node.type) {
      case 'paragraph':
        return <p key={index}>{node.children.map((child, i) => renderNode(child, `${index}-${i}`))}</p>;
      case 'text':
        let text = node.text;
        if (node.bold) text = <strong key={index}>{text}</strong>;
        if (node.italic) text = <em key={index}>{text}</em>;
        if (node.underline) text = <u key={index}>{text}</u>;
        return text;
      case 'heading':
        const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={index}>{node.children.map((child, i) => renderNode(child, `${index}-${i}`))}</HeadingTag>;
      case 'list':
        const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={index}>
            {node.children.map((item, i) => (
              <li key={`${index}-${i}`}>{item.children.map((child, j) => renderNode(child, `${index}-${i}-${j}`))}</li>
            ))}
          </ListTag>
        );
      default:
        return null;
    }
  };

  return <>{content.map((node, index) => renderNode(node, index))}</>;
};

export default RichTextContent;