import React from 'react';
import Image from 'next/image';

interface BlockContent {
  type: string;
  children?: BlockContent[];
  text?: string;
  url?: string;
  alt?: string;
  caption?: string;
  level?: number;
}

interface RichTextContentProps {
  content: BlockContent[];
}

const RichTextContent: React.FC<RichTextContentProps> = ({ content }) => {
  const renderBlock = (block: BlockContent, index: number): React.ReactNode => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="mb-4">{block.children?.map((child, i) => renderBlock(child, i))}</p>;
      case 'heading':
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={index} className="font-['Besley'] text-[#8B0000] mb-4">{block.children?.map((child, i) => renderBlock(child, i))}</HeadingTag>;
      case 'image':
        return (
          <figure key={index} className="my-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.url}`}
              alt={block.alt || ''}
              width={400}
              height={300}
              className="rounded-lg"
            />
            {block.caption && <figcaption className="text-center mt-2">{block.caption}</figcaption>}
          </figure>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#8B0000] pl-4 italic my-4">
            {block.children?.map((child, i) => renderBlock(child, i))}
          </blockquote>
        );
      case 'code':
        return (
          <pre key={index} className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
            <code>{block.children?.map((child, i) => renderBlock(child, i))}</code>
          </pre>
        );
      case 'text':
        return block.text;
      default:
        return null;
    }
  };

  return <div>{content.map((block, index) => renderBlock(block, index))}</div>;
};

export default RichTextContent;